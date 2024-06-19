<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" required v-model="title" />
      <label>Content:</label>
      <textarea required v-model="body"></textarea>
      <label>Tags (Hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { projectFirestore, timestamp } from '@/firebase/config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Create',

  setup() {
    const router = useRouter();

    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ''); //removes all whitespace
        tags.value.push(tag.value);
      }

      tag.value = '';
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp()
      };

      try {
        const res = await projectFirestore.collection('posts').add(post);

        router.push({ name: 'home' });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      title,
      body,
      tag,
      tags,
      handleKeyDown,
      handleSubmit
    };
  }
};
</script>

<style lang="scss">
form {
  max-width: 480px;
  margin: 0 auto;
  text-align-last: left;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>

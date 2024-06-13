<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import { ref } from 'vue';

export default {
  components: { PostList },
  name: 'HomeView',

  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        const res = await fetch('http://localhost:3000/posts');

        console.log(res);

        if (!res.ok) {
          throw Error('No data available');
        }

        const data = await res.json();
        posts.value = data;
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  }
};
</script>

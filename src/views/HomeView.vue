<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts"></PostList>
      <TagCloud :posts="posts"></TagCloud>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import getPosts from '../composables/getPosts';
import Spinner from '@/components/Spinner.vue';
import TagCloud from '@/components/TagCloud.vue';

export default {
  name: 'HomeView',
  components: { PostList, Spinner, TagCloud },

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  }
};
</script>

<style lang="scss">
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
}
</style>

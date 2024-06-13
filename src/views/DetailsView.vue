<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '@/composables/getPost';

export default {
  name: 'DetailsView',

  props: ['id'],

  setup(props) {
    const { id } = props;
    const { post, error, load } = getPost(id);

    load();

    return { post, error };
  }
};
</script>

<style lang="scss">
.post {
  max-width: 1200px;
  margin: 0 auto;

  p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }

  .pre {
    white-space: pre-wrap;
  }
}
</style>

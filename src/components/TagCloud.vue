<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '@/composables/useTags';

export default {
  props: ['posts'],

  setup(props) {
    const { posts } = props;

    const { tags } = useTags(posts);

    return { tags };
  }
};
</script>

<style lang="scss">
.tag-cloud {
  padding: 10px;

  h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }

  div {
    display: inline-block;
    padding: 10px;
  }

  a {
    color: #ccc;
    text-decoration: none;

    &.router-link-active {
      color: #ff8800;
      font-weight: bold;
    }
  }
}
</style>

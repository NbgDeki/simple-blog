<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import { ref } from 'vue';

export default {
  components: { PostList },
  name: 'HomeView',

  setup() {
    const posts = ref([
      {
        title: 'welcome to the blog',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates pariatur molestias autem quasi porro animi quod odio, nisi dolores exercitationem nobis atque optio eaque ipsam rem accusantium sed error perferendis necessitatibus voluptas tenetur. Necessitatibus laborum accusantium quae non tempore autem labore tenetur excepturi quidem rerum nobis, veniam quod ullam est dolores officiis dicta dolore omnis reiciendis odio quia nihil! Repudiandae quae iste quasi provident molestiae veritatis vitae, sint laborum ipsum totam tenetur aperiam ullam eos explicabo, facilis aspernatur nulla rerum rem aliquid distinctio, hic perferendis id. Tempora minima, neque consequatur dolorum numquam dolorem fugit atque officia eaque est? Quas enim, iste porro sapiente laudantium distinctio ducimus nam eos aliquam fuga eum tempora eligendi quia error inventore, provident pariatur praesentium magni soluta minima nesciunt mollitia. Tempora assumenda unde recusandae veniam animi nulla incidunt repellendus sed numquam nisi, mollitia ut molestiae vel et aspernatur accusantium maiores architecto. Autem consequuntur minus esse aliquid?',
        id: 1
      },
      { title: 'top 5 css tips', body: 'Lorem ipsum', id: 2 }
    ]);

    return { posts };
  }
};
</script>

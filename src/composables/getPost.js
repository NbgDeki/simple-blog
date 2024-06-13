import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`);

      if (!res.ok) {
        throw Error('That post does not exist');
      }

      const data = await res.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return {
    post,
    error,
    load
  };
};

export default getPost;

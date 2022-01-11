<template>
  <div class="home">
    <blogPost :post="welcomeScreen"/>
    <blogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import blogPost from '../components/BlogPost.vue'
export default {
  name: "Home",
  components: {
    blogPost
  },
  data() {
    return {
      welcomeScreen: {
        title: "welcome !",
        blogPost: `    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis
    quidem assumenda corporis, nesciunt velit dolorum, eius possimus et repellat
    nulla ea. Pariatur iste non dolorem asperiores quaerat obcaecati expedita.`,
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "this is a filler ",
          blogHtml: "this is a filler blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "this is a filler ",
          blogHtml: "this is a filler blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>

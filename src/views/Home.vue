<template>
  <div class="home">
    <blogPost :post="welcomeScreen"/>
    <blogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>

    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blogCard :post="post" v-for="(post , index) in sampleBlogCards " :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogPost from '../components/BlogPost.vue'
import blogCard from '..//components/BlogCard.vue'
export default {
  name: "Home",
  components: {
    blogPost,
    blogCard
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
      sampleBlogCards:[
        {blogTitle:"Blog Card #1" , blogCoverPhoto:"stock-1" , blogDate:"May 1, 2021"},
        {blogTitle:"Blog Card #2" , blogCoverPhoto:"stock-2" , blogDate:"May 1, 2021"},
        {blogTitle:"Blog Card #3" , blogCoverPhoto:"stock-3" , blogDate:"May 1, 2021"},
        {blogTitle:"Blog Card #4" , blogCoverPhoto:"stock-4" , blogDate:"May 1, 2021"},
      ]
    };
  },
};
</script>

<style lang="scss" scoped>

.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>

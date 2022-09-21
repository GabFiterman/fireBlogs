<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>

        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHTML }}</p>

        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          Login/Register <Arrow class="arrow arrow-light" />
        </router-link>

        <router-link class="link" v-else to="#">
          View the post <Arrow class="arrow" />
        </router-link>
      </div>

      <div class="blog-photo">
        <img
          v-if="post.welcomeScreen"
          :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
          alt=""
        />
        <img
          v-else
          :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "BlogPost",
  components: {
    Arrow,
  },
  props: ["post"],
};
</script>

<style lang="scss" scoped></style>

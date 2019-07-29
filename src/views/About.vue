<template>
  <div class="about">
    <div class="hero">
      <Nav />
      <div class="texts">
        <h1>About Us</h1>
        <blockquote>Since our inception in 2004, Level Up Learning has been delivering quality and Outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and technology expertise of 450+ skilled professionals teachers to yield high-quality solutions that add value to businesses.</blockquote>
      </div>
    </div>

    <div class="cards">
      <v-flex>
        <v-card class="mx-auto" :flat="flat" :loading="loading" :outlined="outlined" :elevation="elevation" :raised="raised" :width="width" :height="height">
          <v-img v-if="media" class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>
          <v-card-title v-else>I'm a title</v-card-title>

          <v-card-text>I'm card text</v-card-text>
        </v-card>
      </v-flex>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "About",
  data: () => ({
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: true,
      width: 344,
      height: undefined,
    }),
  components: {
    Nav
  }
};
</script>


<style lang="scss" scoped>
@import "~@/components/styles/About.css";
</style>

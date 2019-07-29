<template>
  <div class="nav">
    <v-toolbar dense flat height="100%" class="toolbar">
      <v-toolbar-title>
        <router-link to="/"><img src="@/assets/logo.png" width="60%" alt /></router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link class="link" to="/about">ABOUT</router-link>
      <router-link class="link" to="/contact">CONTACT</router-link>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.nav {
  margin: 0;
  padding: 0;

  .toolbar{
    background: transparent;

    .link{
      color: #fff;
      text-decoration: none;
      margin-left: 4%;
    }
  }
}
</style>


<template>
  <div class="nav">
    <v-toolbar dense flat height="100%" class="toolbar">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/">
          <img src="@/assets/logo.png" width="60%" alt />
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link class="link" to="/about">ABOUT</router-link>
      <router-link class="link" to="/contact">CONTACT</router-link>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="primary darken-2">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../../assets/avatar1.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text my-6">John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    drawer: true,
    items: [
      { title: "Overview", icon: "mdi-view-dashboard" },
      { title: "Profile", icon: "mdi-account" },
      { title: "Logout", icon: "mdi-logout" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.nav {
  margin: 0;
  padding: 0;

  .toolbar {
    background: transparent;

    .link {
      color: #fff;
      text-decoration: none;
      margin-left: 4%;
    }
  }
}
</style>


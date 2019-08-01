<template>
  <div class="profile">
    <v-container>
      <v-layout row wrap class="pix">
        <v-flex xs12 sm12 md6 lg6 xl6>
          <v-card tile max-width="534" class="mx-auto">
            <v-layout>
              <v-flex shrink>
                <v-avatar
                  class="profile"
                  :size="$vuetify.breakpoint.smAndUp ? 164 : 128"
                >
                  <v-img class="img" src="../../assets/avatar1.jpg"></v-img>
                </v-avatar>
              </v-flex>
              <v-flex>
                <v-img height="100%" src="../../assets/bg12.jpg">
                  <v-layout align-end fill-height>
                    <v-list-item dark color="rgba(0, 0, 0, .4)">
                      <v-list-item-content>
                        <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                        <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-layout>
                </v-img>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style lang="scss" scoped>
@import "../styles/Profile.css";
</style>
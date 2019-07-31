<template>
  <div class="contact">
    <div class="hero">
      <Nav />
      <div class="texts animated bounceInLeft">
        <h1>Contact us</h1>
        <!-- <v-btn class="mx-2" fab dark large color="white">
            <v-icon large color="blue darken-2">mdi-email</v-icon>
        </v-btn>-->

        <div class="dialog">
          <v-layout justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn class="mx-2" fab dark large color="white">
                  <v-icon large color="blue darken-2" v-on="on">mdi-email</v-icon>
                </v-btn>
                <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field label="Email" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field label="Subject" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field label="I am writing because..." required></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-textarea outlined name="input-7-4" label="Description"></v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-layout justify-center>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false" class="ma-2 red white--text">
                      cancle
                      <v-icon dark right>mdi-close</v-icon>
                    </v-btn>
                    <v-btn @click="dialog = false" class="ma-2 primary">
                      Send
                      <v-icon dark right>mdi-send</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-layout>
              </v-card>
            </v-dialog>
          </v-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Contact",
  data: () => ({
    dialog: false
  }),
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/Contact.css";
</style>
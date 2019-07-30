<template>
  <div class="about">
    <video autoplay muted loop>
      <source src="@/assets/vid2.mp4" type="video/mp4" />
    </video>

    <div class="cover">
      <Nav />
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg5 xl5 class="left-side animated bounceInLeft">
            <h1 class="white--text">About us</h1>
            <p
              class="white--text"
            >Since our inception in 2004, ValueCoders has been delivering IT Outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.</p>
          </v-flex>

          <v-flex xs12 sm12 md12 lg7 xl7 class="right-side animated bounceInRight">
            <v-layout row wrap justify-space-around>
              <v-flex xs12 sm5 md5 lg5 xl5>
                <v-card class="sight">
                  <v-img class="image" src="@/assets/bg4.jpg"></v-img>
                  <v-card-title>
                    <h1>our mission</h1>
                    <p>To deliver high-quality academic services with integrity, honesty, and transparency with reasonable margins, while maintaining profitability.</p>
                  </v-card-title>
                </v-card>
              </v-flex>

              <v-flex xs12 sm5 md5 lg5 xl5>
                <v-card class="sight">
                  <v-img class="image" src="@/assets/bg12.jpg"></v-img>
                  <v-card-title>
                    <h1>our vision</h1>
                    <p>To be the most recognized and trusted software development company based out of Nigeria.</p>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "About",
  components: {
    Nav
  }
};
</script>


<style lang="scss" scoped>
@import "~@/components/styles/About.css";
</style>

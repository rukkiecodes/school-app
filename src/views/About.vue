<template>
  <div class="about">
    <div class="hero">
      <Nav />
      <div class="texts animated bounceInUp">
        <h1 class="scroll" data-rate="-2" data-direction="vertical">About Us</h1>
        <blockquote class="scroll" data-rateY="1" data-rateX="2" data-direction="horizontal">Since our inception in 2004, Level Up Learning has been delivering quality and Outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and technology expertise of 450+ skilled professionals teachers to yield high-quality solutions that add value to businesses.</blockquote>
      </div>
    </div>

    <div class="cards">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 xl3>
            <v-card class="pill" raised="true">
              <v-img class="white--text" height="130px" src="@/assets/bg13.jpg"></v-img>
              <v-card-title class="card-title">
                <h3 class="dark--text">97%+</h3>
                <p class="grey--text">Studen Retention</p>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md4 lg3 xl3>
            <v-card class="pill" raised="true">
              <v-img class="white--text" height="130px" src="@/assets/bg4.jpg"></v-img>
              <v-card-title class="card-title">
                <h3 class="dark--text">2000+</h3>
                <p class="grey--text">Years Experience</p>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md4 lg3 xl3>
            <v-card class="pill" raised="true">
              <v-img class="white--text" height="130px" src="@/assets/bg14.jpg"></v-img>
              <v-card-title class="card-title">
                <h3 class="dark--text">2500+</h3>
                <p class="grey--text">Happy Parents</p>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md4 lg3 xl3>
            <v-card class="pill" raised="true">
              <v-img class="white--text" height="130px" src="@/assets/bg2.jpg"></v-img>
              <v-card-title class="card-title">
                <h3 class="dark--text">10+</h3>
                <p class="grey--text">Years in Business</p>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around class="mission">
          <v-flex xs12 sm12 md6 lg6 xl6>
            <v-card raised="true" class="sight">
              <v-img class="white--text" height="250px" src="@/assets/bg5.jpg"></v-img>
              <v-card-title>
                <h1>our mission</h1>
                <p>
                  To deliver high-quality academic services with integrity, honesty, and transparency with reasonable margins, while maintaining profitability.
                </p>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 sm12 md6 lg6 xl6>
            <v-card raised="true" class="sight">
              <v-img class="white--text" height="250px" src="@/assets/bg12.jpg"></v-img>
              <v-card-title>
                <h1>our vision</h1>
                <p>
                  To be the most recognized and trusted academic institute based out of Nigeria.
                </p>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer"
export default {
  name: "About",
  components: {
    Nav, Footer
  },
  mounted(){
    window.addEventListener('scroll', function(e){
      const target = document.querySelectorAll('.scroll');

      var index = 0, length = target.length;
      for(index; index < length; index++){
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical'){
          target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)'
        }else{
          var posX = window.pageYOffset * target[index].dataset.ratex;
          var posY = window.pageYOffset * target[index].dataset.ratey;

          target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
      }
    })
  }
};
</script>


<style lang="scss" scoped>
@import "~@/components/styles/About.css";
</style>

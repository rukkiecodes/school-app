<template>
  <div class="home">
    <video autoplay muted loop>
      <source src="@/assets/vid1.mp4" type="video/mp4">
    </video>
    <div class="hero">
      <v-app-bar-nav-icon class="white--text drawer-icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" app class="nav-drawer">
        <v-list>
          <v-list-title class="list-tile">
            <v-list-tile-action>
              <i class="fa fa-list-alt"></i>
            </v-list-tile-action>
            <router-link to="/about" class="title-content"><v-list-title-content class="width--text"> About</v-list-title-content></router-link>
          </v-list-title><br>

          <v-list-title class="list-tile">
            <v-list-tile-action>
              <i class="fa fa-headset"></i>
            </v-list-tile-action>
            <router-link to="/contact" class="title-content"><v-list-title-content class="width--text"> Contact</v-list-title-content></router-link>
          </v-list-title>
        </v-list>
      </v-navigation-drawer>
      <div class="texts">
        <h1>level up learning</h1>
        <h4>You are not alone</h4>
        <p>Join us today</p>
        
        <div class="forms">
          <div class="login_form">
            <v-layout justify-center>
              <v-dialog v-model="dialog1" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn class="reg_btn" v-on="on">Login</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Login</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Email*" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog1 = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog1 = false">Send</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </div>

          <div class="signup_form">
            <v-layout justify-center>
              <v-dialog v-model="dialog2" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn class="reg_btn" v-on="on">Sign Up</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Sign Up</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Full Name*" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Email*" type="email" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog2 = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog2 = false">Send</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name:'Home',
    data:() => ({
      dialog1: false,
      dialog2: false,
      drawer: false
    }),
    methods:{
    }
  }
</script>

<style lang="scss" scoped>
.home{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden !important;
  font-family: 'Raleway', sans-serif;

  video{
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    pointer-events: none;
  }

  .hero{
    height: 100vh;
    width: 100%;
    background: linear-gradient(50deg, rgba(0, 0, 0, 0.973), rgba(0,0,0,0.4));
    position: relative;
    z-index: 1;
    

    .texts{
      position: relative;
      top: 150px;
      text-align: center;

      h1{
        font-size: 3em;
        letter-spacing: .2em;
        font-weight: lighter;
        color: #fff;
        text-transform: uppercase;
      }

      h4{
        color: #fff;
        font-size: 2em;
        font-weight: lighter;
        letter-spacing: .1em;
      }

      p{
        color: #fff;
        letter-spacing: .1em;
        font-weight: lighter;
        font-size: 1em;
      }

      .reg_btn{
        background: transparent;
        border: none;
        border-bottom: 2px solid #fff;
        color: #fff;
        border-radius: 0%;
        margin-top: 1%;
      }
    }

    .nav-drawer{
      background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(~@/assets/bg1.jpg) no-repeat;
      background-size: cover;
      background-position: center;
      padding: 5% 2%;
      word-spacing: 5px;
    }

    .list-tile{
      display: block;

      .fa-list-alt, .fa-headset{
        color: #fff;
        font-size: 2em;
      }

      .title-content{
        color: #fff;
        font-size: 1.2em;
        text-decoration: none;
      }
    }
  }
}
</style>

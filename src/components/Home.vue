<template>
  <div class="home">
    <video autoplay muted loop>
      <source src="@/assets/vid1.mp4" type="video/mp4">
    </video>
    <div class="hero">
      <div class="texts">
        <h1>level up learning</h1>
        <h4>You are not alone</h4>
        <p>Join us today</p>
        
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div class="my-mouse">
              <v-icon class="mouse-icon" v-on="on">mdi-mouse</v-icon></div>
            <div class="mouse-bottom"></div>
          </template>
          <span>Click To Login / Register</span>
        </v-tooltip>
      </div>
    </div>



    <div class="forms">
      <v-layout justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal first name*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </div>
</template>


<script>
  export default {
    name:'Home',
    data:() => ({
      dialog: false
    }),
    methods:{
      left(){

      },
      right(){
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.home{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

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
    text-align: center;

    .texts{
      position: relative;
      top: 250px;
      font-family: 'Raleway', sans-serif;

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

      .my-mouse{
        width: 30px;
        height: 30px;
        // border-radius: 50% 50% 50% 0;
        // background: #89849b;
        position: absolute;
        transform: rotate(-45deg);
        left: 50%;
        top: 130%;
        margin: -20px 0 0 -20px;
        animation-name: bounce;
        animation-fill-mode: both;
        animation-duration: 1s;

        .mouse-icon{
          color:#fff;
          font-size: 2em;
        }

        &:after{
          content: '';
          width: 14px;
          height: 14px;
          margin: 8px 0 0 8px;
          // background: #f1f1f1;
          position: absolute;
          border-radius: 50%;
        }
      }

      .mouse-bottom{
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        height: 14px;
        width: 14px;
        position: absolute;
        left: 48.7%;
        top: 130%;
        margin: 11px 0px 0px -12px;
        transform: rotateX(55deg);
        z-index: -2;

        &:after{
          content: "";
          border-radius: 50%;
          height: 40px;
          width: 60px;
          position: absolute;
          margin: -13px 0 0 -13px;
          animation: pulsate 1s ease-out;
          animation-iteration-count: infinite;
          opacity: 0.0;
          box-shadow: 0 0 1px 2px #89849b;
          animation-delay: 1.1s;
        }
      }

      @keyframes pulsate{
        0%{
          transform: scale(0.1, 0.1);
          opacity: 0.0;
        }
        50%{
          opacity: 1.0;
        }
        100%{
          transform: scale(1.2, 1.2);
          opacity: 0;
        }
      }

      @keyframes bounce{
        0%{
          opacity: 0;
          transform: translateY(-2000px) rotate(-45deg);
        }
        60%{
          opacity: 1;
          transform: translateY(30px) rotate(-45deg);
        }
        80%{
          transform: translateY(-10px) rotate(-45deg);
        }
        100%{
          transform: translateY(0) rotate(0deg);
        }
      }
    }
  }
}
</style>

<template>
  <div class="forms">
    <!--Login form-->
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
                    <ValidationProvider name="Login email" rules="required|email">
                      <v-text-field
                        label="Email"
                        slot-scope="{ errors, valid }"
                        v-model="loginEmail"
                        :error-messages="errors"
                        :success="valid"
                        required
                      >
                        <v-icon slot="prepend" color="blue">mdi-email</v-icon>
                      </v-text-field>
                    </ValidationProvider>
                  </v-flex>

                  <v-flex xs12>
                    <ValidationProvider name="Login password" rules="required|max:10|min:6">
                      <v-text-field
                        slot-scope="{ errors, valid }"
                        label="Password"
                        type="password"
                        v-model="loginPassword"
                        :error-messages="errors"
                        :success="valid"
                      >
                        <v-icon slot="prepend" color="blue">mdi-lock</v-icon>
                      </v-text-field>
                    </ValidationProvider>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-layout justify-center>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="loginClear" class="ma-2 red white--text">
                  cancle
                  <v-icon dark right>mdi-close</v-icon>
                </v-btn>
                <v-btn @click="dialog1" class="ma-2 primary">
                  Send
                  <v-icon dark right>mdi-send</v-icon>
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>

    <!--signup form-->
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
                    <ValidationProvider name="name" rules="required">
                      <v-text-field
                        slot-scope="{ errors, valid }"
                        label="Full Name"
                        v-model="fullName"
                        :error-messages="errors"
                        :success="valid"
                        required
                      >
                        <v-icon slot="prepend" color="blue">mdi-account</v-icon>
                      </v-text-field>
                    </ValidationProvider>
                  </v-flex>

                  <v-flex xs12>
                    <ValidationProvider name="Sign UP Email" rules="required|email">
                      <v-text-field
                        slot-scope="{ errors, valid }"
                        v-model="signupEmail"
                        :error-messages="errors"
                        :success="valid"
                        label="Email"
                        type="email"
                        required
                      >
                        <v-icon slot="prepend" color="blue">mdi-email</v-icon>
                      </v-text-field>
                    </ValidationProvider>
                  </v-flex>
                  <v-flex xs12>
                    <ValidationProvider name="SignUp Password" rules="required|max:10|min:6">
                      <v-text-field
                        slot-scope="{ errors, valid }"
                        v-model="signupPassword"
                        :error-messages="errors"
                        :success="valid"
                        label="Password"
                        type="password"
                        required
                      >
                        <v-icon slot="prepend" color="blue">mdi-lock</v-icon>
                      </v-text-field>
                    </ValidationProvider>
                  </v-flex>
                  <v-flex xs12>
                    <span class="red--text" v-model="displaysignuperror">{{ displaysignuperror }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-layout justify-center>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="signupClear" class="ma-2 red white--text">
                  cancle
                  <v-icon dark right>mdi-close</v-icon>
                </v-btn>
                <v-btn @click="register" class="ma-2 primary">
                  {{ signupSend }}
                  <v-icon dark right>mdi-send</v-icon>
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </div>
</template>


<script>
import {
  ValidationObserver,
  ValidationProvider,
  withValidation
} from "vee-validate";
import { fb } from "../firebase";
export default {
  name: "Forms",
  data: () => ({
    dialog1: false,
    dialog2: false,
    loginEmail: null,
    loginPassword: null,
    fullName: null,
    signupEmail: null,
    signupPassword: null,
    signupSend: "Sign Up",
    displaysignuperror: null
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    loginClear() {
      this.loginEmail = this.loginPassword = null;
      this.dialog1 = false;
    },
    signupClear() {
      this.fullName = this.signupEmail = this.signupPassword = null;
      this.dialog2 = false;
    },
    register() {
      this.signupSend = "Signing Up...";
      fb.auth()
        .createUserWithEmailAndPassword(this.signupEmail, this.signupPassword)
        .then(() => {
          this.$router.replace("admin/overview");
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            this.signupSend = "";
            this.signupSend = "Error !!";
            // alert(errorMessage);
            this.displaysignuperror = errorMessage;
          }
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.forms {
  margin: 0;
  padding: 0;

  .login_form,
  .signup_form {
    .reg_btn {
      background: transparent !important;
      margin-top: 2%;
      border-radius: 0;
      border: none;
      border-bottom: 2px solid #fff;
      color: #fff;
      box-shadow: none;
    }
  }
}
</style>

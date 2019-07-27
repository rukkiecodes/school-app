<template>
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
</template>


<script>
export default {
    name: 'Forms',
    data:() => ({
        dialog1: false,
      dialog2: false
    })
}
</script>

<style lang="scss" scoped>
.forms{
    margin: 0;
    padding: 0;

    .login_form, .signup_form{
        .reg_btn{
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

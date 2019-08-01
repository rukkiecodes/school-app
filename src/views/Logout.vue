<template>
    <div class="overview">
        <v-container>
            <v-layout row wrap justify-center>
                <v-flex>
                    <h1>Logout Page</h1>
                    <v-icon @click="logout()" class="primary--text">mdi-logout</v-icon>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus exercitationem quod deserunt dolor nesciunt repellat autem non natus eveniet quae ab quaerat, esse nisi pariatur animi. Voluptas nam pariatur rerum.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import {fb} from '../firebase';
export default {
    name: 'Overview',
    methods:{
        logout(){
            fb.auth().signOut()
            .then(() => {
                this.$router.replace('/');
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>

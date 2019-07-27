<template>
    <div class="drawer">
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
    </div>
</template>

<script>
export default {
    name: 'Drawer',
    data:()=>({
        drawer: false  
    })
}
</script>

<style lang="scss" scoped>
.drawer{
    margin: 0;
    padding: 0;

    .nav-drawer{
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(~@/assets/bg1.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        padding: 5% 2%;
        word-spacing: 5px;

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


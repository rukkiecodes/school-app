<template>
    <div class="foot">
        <v-container fluid>
            <v-layout row wrap justify-space-around>
                <v-flex xs12 sm12 md12 lg12 xl12 justify-center class="head">
                    <h1 class="white--text">Level Up Learning</h1>
                </v-flex>

                <v-flex xs12 sm12 md12 lg12 xl12 class="container">
                    <div class="inner">
                        <span>i</span>
                        <h1 class="white--text">Hey</h1>
                        <p class="white--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quos tempore doloremque tempora, nulla libero temporibus nobis eum vel deserunt, corporis reiciendis</p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "~@/components/styles/footer.css";
</style>

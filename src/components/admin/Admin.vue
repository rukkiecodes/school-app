<template>
    <div class="admin">
        <Nav/>
        <router-view/>
    </div>
</template>

<script>
import Nav from './AdminNav'
export default {
    name: 'Admin',
    components:{
        Nav
    }
}
</script>

<style>

</style>

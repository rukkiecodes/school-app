<template>
  <div class="home">
    <video autoplay muted loop>
      <source src="@/assets/vid1.mp4" type="video/mp4">
    </video>
    <div class="hero">
      <!--drawer goes here-->
      <Nav />
      <div class="texts">
        <h1>level up learning</h1>
        <h4>You are not alone</h4>
        <p>Join us today</p>
        
        <!--form goas here-->
        <Forms />
      </div>
    </div>
  </div>
</template>


<script>
import Forms from './Forms'
import Nav from './Nav'
  export default {
    name:'Home',
    data:() => ({
      drawer: false
    }),
    components:{
      Forms, Nav
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
    }
  }
}
</style>

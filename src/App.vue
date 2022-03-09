<template>
<div class="nav-frame">
  <nav class="container">
      <img src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png">
  </nav>
</div> 
<hr>
  <main>
    <Post/>
  </main>
</template>

<script>
import Post from './Post';
export default {
    name: "App",
    components: {
      Post,
    }
}
</script>

<style>

@import 'style.css';

body {
  background-color: white;
  height: 100vh;
  margin: 0;
}


</style>

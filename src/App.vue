<template>
<div class="nav-frame">
  <div class="container">
    <ul class="left">
      <img src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" class="logo">
    </ul>
    <ul class="right">
      아이콘들
    </ul>
      <div class="search">
        <div>돋</div>
        <input placeholder="검색">
      </div>
    </div>
</div>

<Post/>
 
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

#app {
  box-sizing: border-box;
  width: 100%;
}

body {
  background-color: white;
  height: 100vh;
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}


</style>

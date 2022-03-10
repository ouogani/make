<template>
<div class="backcolor">
<div class="nav-box">
  <div class="container">
      <div calss="white">
        <ul class="col left">
          <img src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" class="logo" >
        </ul>
    <ul class="col right">
      <Icon/>
    </ul>
      <div class="col-md-0 search">
        <div class="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <input placeholder="검색" style="border: none; background: transparent;">
        </div>
      </div>

      </div>
    </div>
</div>

<div class="container main">

    <Post :게시물="게시물[0]"/>
    <Post :게시물="게시물[1]"/>
    <Post :게시물="게시물[2]"/>


</div>
</div>
  
</template>


<script>
import Post from './Post';
import postdata from './assets/postdata.js';
import Icon from './Icon';


export default {
    name: "App",
    data(){
      return{
        게시물: postdata, 
      }
    },
    components: {
      Post, Icon,
    },
    
}
</script>

<style>

svg {
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
}
.backcolor{
  background-color: rgb(247, 247, 247);
}

body {
  display: contents;
  background-color: white;
  height: 100vh;
}

ul {
  list-style-type: none;
  margin-bottom: 0;
  margin-top: 0;
}

.logo{
  margin-top: 5px;
  margin-right: 10px;
}

.search{
  display: flex;
}

.search-box{
  border: 1px solid rgb(247, 247, 247);
  padding-left: 10px;
  border-radius: 8px;
  height: 40px;
  display: flex;
  background-color:rgb(247, 247, 247);
  width: 300px;
}

input:focus { outline: none; }

.input{
  position: relative;
  left: 40px;

  height: 10px;
  outline: none;
}

.white{
  background-color: rgb(247, 247, 247);
}

</style>

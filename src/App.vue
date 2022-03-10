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



<div class="story">
  <Story :스토리="스토리[0]"/>
  <Story :스토리="스토리[1]"/>
  <Story :스토리="스토리[2]"/>
</div>
    
<div class="footer">
  <div class="my-change">
    <img src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg" class="my-pic" width="60" height="60"/>
    <div class="f-user">
      <p><strong>gaeun</strong>
      가은</p>
      <a href="#"><strong>전환</strong></a>
    </div>
    
  </div>
</div>

<div class="container">
</div>
  <Post :게시물="게시물[0]"/>
  <Post :게시물="게시물[1]"/>
  <Post :게시물="게시물[2]"/>
</div>
  
</template>


<script>
import Post from './Post';
import postdata from './assets/postdata.js';
import Icon from './Icon';
import Story from './Story';
import storydata from './assets/storydata.js';


export default {
    name: "App",
    data(){
      return{
        게시물: postdata, 
        스토리: storydata,
      }
    },
    components: {
    Post,
    Icon,
    Story,
},
    
}
</script>

<style>

.search-box>svg{
  margin-top: 12px;
}

svg {
  margin-top: 8px;
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
  margin-top: 10px;
  margin-right: 10px;
}

.search{
  display: flex;
}

.search-box{
  border: 1px solid rgb(247, 247, 247);
  padding-left: 10px;
  border-radius: 8px;
  height: 38px;
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

.story{
  height: 120px;
  width: 500px;
  
  position: absolute;
  margin-top: 80px;

  border-radius: 3px;
  border-bottom: 1px solid gainsboro;
  border-top: 1px solid gainsboro;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  background-color: white;

  display: flex;

}

/* footer */
.footer{
    position: absolute;
    margin-top: 80px;
    margin-left: 520px;
    height: 520px;
    width: 300px;
  
    position: fixed;
  
    border: 1px solid;
  }

  .my-change{
    width: 70px;
    height: 70px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    display: flex;
}

.my-pic{
    border: 3px solid #eee;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    background-size: 100%;
}

.f-user{
    font-size: 14px;
    align-self: center;
    margin-left: 10px;
    display: flex;
}

.f-user>a{
    margin-top: 10px;
    width: 50px;
    margin-left: 100px;
    font-size: 12px;
    color: dodgerblue;
    text-decoration: none;
}


  </style>

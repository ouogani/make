<template>
    <div class="post-box">
           <div class="user">
            <div class = "user-photo" :style="{ backgroundImage : `url(${게시물.userImage})` }">

            </div>
            <div class="user-name">
                <strong>{{ 게시물.name }}</strong>
            </div>
            </div>
        
        <div class="post-img" :style="{ backgroundImage : `url(${게시물.postImage})` }">
            
        </div> 

        <div class="post-content">
             <p><strong>좋아요 {{ 게시물.likes }}개</strong></p>
            <p><strong>{{ 게시물.name }}</strong> {{ 게시물.content }}</p>
            <p class="time"> {{게시물.time}} </p>
        </div>
    </div>
</template>

<script>

export default {
    props : {
      게시물: Array,
    },
};
</script>

<style>

@import 'style.css';

.user{
    height: 50px;
    padding: 10px;
    margin-left: 5px;
}

.user-photo>img{
    border: solid;
    border-color: fuchsia;
    border-radius: 50px;
    margin-right: 10px;
    align-items: center;
}

.user-name{
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 4px;
    font-size: 14px;
}

.post-box{
    margin-top: 190px;
    margin-bottom: -170px;
   
    border-radius: 3px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    background-color: white;
    width: 500px;
}



.post-content{
  margin-left: 15px;
  margin-top: 10px;
  font-size: 14px;
}

.date{
    font-size: 10px;
    color: grey;
    margin-top: -8px;
}

.user-photo{
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}

.post-img{
    height: 450px;
    background-position: center;
    background-size: cover;
}

.time {
    font-size: 11px;
    color: grey;
    margin-top: -8px;
}

</style>

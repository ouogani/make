<template>
    <div class="post-box">
           <div class="user">
            <div class = "user-photo">
                <img src="https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg" width="30" height="30px">
            </div>
            <div class="user-name">
                name_gaeun
            </div>
            </div>
        
        <div class="post-img">
            <img src="https://emle.org/wp-content/uploads/revslider/blog/demo-img-2.png" width="600px" height="500px">
        </div> 
    </div>
</template>

<script>

export default {
    name: "App",
    components: {
      
    }
}
</script>

<style>

@import 'style.css';

.user{
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 10px;
   
}

.user-photo>img{
    height: 30px;
    width: 30px;
    border: solid;
    border-color: fuchsia;
    padding: 1px;
    border-radius: 50px;
    margin-right: 10px;
    align-items: center;
}

.post-box{
    margin-left: 10px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    width: 602px;
}

</style>

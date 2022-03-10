<template>
    <div class="user-story">
        <div class="story-img" :style="{ backgroundImage : `url(${스토리.storyImage})` }" viewBox="0 0 60 60" width="60">

        </div>
        <div class="story-name">{{ 스토리.storyName }}</div>
    </div>
</template>

<script>

export default {
    props : {
      스토리: Array,
    },
};
</script>

<style>



.user-story{
    width: 70px;
    height: 70px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
}

.story-img{
    border: 3px solid #eee;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    background-size: 100%;
}

.story-name{
    font-size: 12px;
    display: flex;
    margin-left: -10px;
    justify-content: center;
}
</style>
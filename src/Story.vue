<template>
  <div class="user-story">
    <div
      class="story-img"
      :style="{ backgroundImage: `url(${스토리.storyImage})` }"
    ></div>
    <div class="story-name">{{ 스토리.storyName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    스토리: Array,
  },
};
</script>

<style>
.user-story {
  width: 70px;
  height: 70px;
  margin-left: 15px;
  margin-top: 20px;
  margin-bottom: 5px;
}

.story-img {
  border: 2px solid #eee;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-bottom: 5px;
}

.story-name {
  font-size: 12px;
  display: flex;
  margin-left: -10px;
  justify-content: center;
}
</style>

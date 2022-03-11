<template>
  <div class="recommen-list">
    <div
      class="recommen-pic"
      :style="{ backgroundImage: `url(${추천.recommenImage})` }"
      width="40"
    ></div>

    <div class="user-list">
      <div class="recommen-nc">
        <strong class="fb">
          <a href="#">{{ 추천.recommenName }}</a>
        </strong>
        <div class="recommen-content">{{ 추천.recommenContent }}</div>
      </div>

      <a href="#"><strong>팔로우</strong></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    추천: Array,
  },
};
</script>

<style>
.recommen-list {
  height: 50px;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
}

.recommen-pic {
  border: 0.5px solid rgb(102, 102, 102);
  border-radius: 50%;
  height: 35px;
  width: 35px;
  background-size: 100%;
  margin-top: 7px;
}

.user-list {
  font-size: 13px;
  align-self: center;
  margin-left: 10px;
  height: 50px;
  width: 320px;
  display: flex;
}

.fb > a {
  color: black;
  text-decoration: none;
}

.fb > a:hover {
  text-decoration: underline;
}

.user-list > a {
  margin-top: 15px;
  width: 100px;
  margin-left: 172px;
  font-size: 12px;
  color: dodgerblue;
  text-decoration: none;
}

.recommen-nc {
  flex-direction: column;
  height: 40px;
  width: 40px;
  margin-top: 5px;
}

.recommen-content {
  width: 250px;
  color: gray;
  font-size: 12px;
}
</style>

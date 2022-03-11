<template>
  <div class="recommen-list">
    <div
      class="recommen-pic"
      :style="{ backgroundImage: `url(${추천.recommenImage})` }"
      width="40"
    ></div>

    <div class="user-list">
      <p>
        <strong class="fb">{{ 추천.recommenName }}</strong> {{ 추천.recommenContent }}
      </p>
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
  font-size: 14px;
  align-self: center;
  margin-left: 10px;
  height: 50px;
  width: 220px;
  display: flex;
}

.user-list > p {
  color: gray;
  margin-left: 5px;
  padding-top: 5px;
}

.fb {
  color: black;
}

.user-list > a {
  margin-top: 20px;
  width: 100px;
  margin-left: 118px;
  font-size: 12px;
  color: dodgerblue;
  text-decoration: none;
}
</style>

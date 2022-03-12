<template>
  <div class="post-box">
    <div class="user">
      <div
        class="user-photo"
        :style="{ backgroundImage: `url(${게시물.userImage})` }"
      ></div>
      <div class="user-name">
        <strong>{{ 게시물.name }}</strong>
      </div>
      <div class="more">
        <a href="#">
          <svg
            aria-label="옵션 더 보기"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </a>
      </div>
    </div>

    <div class="post-img" :style="{ backgroundImage: `url(${게시물.postImage})` }"></div>
    <div class="post-icon">
      <div class="left">
        <a
          @click="[$store.commit('좋아요업'), $store.commit('좋아요색')]"
          class="likesup"
        >
          <span v-if="$store.state.likecolor == 1">
            <svg
              aria-label="좋아요"
              class="_8-yf5"
              color="##ff0000"
              fill="#ff0000"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
              ></path>
            </svg>
          </span>

          <span v-if="$store.state.likecolor == 0">
            <svg
              aria-label="좋아요"
              class="_8-yf5"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
              ></path>
            </svg>
          </span>
        </a>

        <a>
          <svg
            aria-label="댓글 달기"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </a>

        <a>
          <svg
            aria-label="게시물 공유"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"
            ></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </a>
      </div>
      <div class="right">
        <a>
          <svg
            aria-label="저장"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </a>
      </div>
    </div>
    <div class="post-content">
      <p>
        <strong> 좋아요 {{ $store.state.likes[$store.state.a] }}개</strong>
      </p>
      <p>
        <strong>{{ 게시물.name }}</strong> {{ 게시물.content }}
      </p>
      <p class="time">{{ 게시물.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    게시물: Object,
  },
};
</script>

<style>
@import "style.css";
.user {
  height: 60px;
  padding: 10px;
  margin-left: 5px;
  margin-top: 5px;
}
.user-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 4px;
  font-size: 14px;
}
.post-box {
  margin-top: 210px;
  margin-bottom: -170px;
  margin-left: 20px;
  border-radius: 3px;
  border-bottom: 1px solid gainsboro;
  border-top: 1px solid gainsboro;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  background-color: white;
  width: 600px;
}
.post-icon {
  height: 40px;
  margin-top: 10px;
}
.right {
  margin-right: 6px;
}
.post-content {
  margin-left: 15px;
  margin-top: 10px;
  font-size: 14px;
}
.date {
  font-size: 10px;
  color: grey;
  margin-top: -8px;
}
.user-photo {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.post-img {
  height: 650px;
  background-position: center;
  background-size: cover;
}
.time {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
.more {
  float: right;
  margin-left: 5px;
}

.left > a {
  cursor: pointer;
}

.right > a {
  cursor: pointer;
}
</style>

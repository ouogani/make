<template>
  <div class="backcolor">
    <div class="nav-box">
      <div class="container">
        <div calss="white">
          <ul class="col left">
            <a href="#">
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                class="logo"
              />
            </a>
          </ul>
          <ul class="col right">
            <Icon />
          </ul>
          <div class="col-md-0 search">
            <div class="search-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
              <input placeholder="검색" style="border: none; background: transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="story">
        <Story :스토리="스토리[0]" />
        <Story :스토리="스토리[1]" />
        <Story :스토리="스토리[2]" />
      </div>

      <div class="footer">
        <div class="my-change">
          <img
            src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
            class="my-pic"
            width="60"
            height="60"
          />
          <div class="f-user">
            <p><strong class="fb">gaeun</strong> 가은</p>
            <a href="#"><strong>전환</strong></a>
          </div>
        </div>
        <div class="recommen-header">
          <strong>회원님을 위한 추천</strong>
          <span
            ><a href="#"><strong>모두보기</strong></a></span
          >
        </div>

        <Recommen :추천="추천[0]" />
        <Recommen :추천="추천[1]" />
        <Recommen :추천="추천[2]" />
        <Recommen :추천="추천[3]" />
        <Recommen :추천="추천[4]" />

        <ul class="footer-under">
          <div class="under-list">
            <li><a href="#">소개</a>.&nbsp;</li>
            <li><a href="#">도움말</a>.&nbsp;</li>
            <li><a href="#">홍보 센터</a>.&nbsp;</li>
            <li><a href="#">API</a>.&nbsp;</li>
            <li><a href="#">채용 정보</a>.&nbsp;</li>
          </div>
          <div class="under-list1">
            <li><a href="#">개인정보처리방침</a>.&nbsp;</li>
            <li><a href="#">약관</a>.&nbsp;</li>
            <li><a href="#">위치</a>.&nbsp;</li>
            <li><a href="#">인기 계정</a>.&nbsp;</li>
            <li><a href="#">해시태그</a>.&nbsp;</li>
          </div>
          <div class="under-list2">
            <li><a href="#">언어</a></li>
          </div>
        </ul>

        <div class="footer-end">
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>

      <div class="container"></div>
      <Post :게시물="게시물[0]" />
      <Post :게시물="게시물[1]" />
      <Post :게시물="게시물[2]" />
    </div>
  </div>
</template>

<script>
import Post from "./Post";
import postdata from "./assets/postdata.js";
import Icon from "./Icon";
import Story from "./Story";
import storydata from "./assets/storydata.js";
import Recommen from "./Recommen";
import recommendata from "./assets/recommendata.js";

export default {
  name: "App",
  data() {
    return {
      게시물: postdata,
      스토리: storydata,
      추천: recommendata,
    };
  },
  components: {
    Post,
    Icon,
    Story,
    Recommen,
  },
};
</script>

<style>
.search-box > svg {
  margin-top: 12px;
}

svg {
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 10px;
}
.backcolor {
  background-color: rgb(247, 247, 247);
  width: 100%;
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

.logo {
  margin-top: 10px;
  margin-right: 10px;
}

.search {
  display: flex;
}

.search-box {
  border: 1px solid rgb(247, 247, 247);
  padding-left: 10px;
  border-radius: 8px;
  height: 38px;
  display: flex;
  background-color: rgb(247, 247, 247);
  width: 260px;
  margin-left: 160px;
}

input:focus {
  outline: none;
}

.input {
  position: relative;
  left: 40px;

  height: 10px;
  outline: none;
}

.white {
  background-color: rgb(247, 247, 247);
}

.story {
  height: 120px;
  width: 600px;

  position: absolute;
  margin-top: 80px;
  margin-left: 20px;

  border-radius: 3px;
  border-bottom: 1px solid gainsboro;
  border-top: 1px solid gainsboro;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  background-color: white;

  display: flex;
}

/* footer */
.footer {
  position: absolute;
  margin-top: 80px;
  margin-left: 640px;
  height: 520px;
  width: 400px;
  position: fixed;
}

.my-change {
  width: 70px;
  height: 70px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
  display: flex;
}

.my-pic {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-size: 100%;
}

.f-user {
  font-size: 14px;
  align-self: center;
  margin-left: 10px;
  display: flex;
}

.f-user > p {
  color: gray;
  margin-left: 5px;
}

.fb {
  color: black;
}

.f-user > a {
  margin-top: 10px;
  width: 50px;
  margin-left: 140px;
  font-size: 12px;
  color: dodgerblue;
  text-decoration: none;
}

.recommen-header {
  width: 300px;
  margin-left: 20px;
  font-size: 14px;
  color: gray;
}

.recommen-header > span {
  float: right;
  margin-right: 3px;
  font-size: 12px;
}

a {
  text-decoration: none;
}

.footer-under {
  font-size: 11px;
  padding: 0;
  margin: 20px;
}

.under-list > li {
  color: gray;
}
.under-list1 > li {
  color: gray;
}
.under-list2 > li {
  color: gray;
}

.under-list > li > a {
  color: gray;
}
.under-list1 > li > a {
  color: gray;
}
.under-list2 > li > a {
  color: gray;
}

.footer-end {
  font-size: 11px;
  color: rgb(182, 182, 182);
  margin-left: 20px;
}

.under-list {
  display: flex;
  width: 100%;
  height: 15px;
  color: rgb(182, 182, 182);
}

.under-list1 {
  display: flex;
  width: 100%;
  height: 15px;
}
.under-list2 {
  display: flex;
  width: 100%;
  height: 15px;
}
</style>

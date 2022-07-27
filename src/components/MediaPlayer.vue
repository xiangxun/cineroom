<template>
  <div class="container">
    <video id="video" ref="video" controls="true" crossOrigin="anonymous" :src="videoUrl">
      <!-- <source src="/video/最伟大的作品.mp4" type="video/mp4" /> -->
    </video>
    <audio
      id="musicL"
      preload="auto"
      ref="musicL"
      loop
      controls
      crossOrigin="anonymous"
      :src="songurl"
    ></audio>
    <audio
      id="musicR"
      preload="auto"
      ref="musicR"
      loop
      controls
      crossOrigin="anonymous"
      :src="songurl"
    ></audio>
    <button @click="playVideo" class="play">播放视频</button>
    <button @click="videoPause" class="pause">视频暂停</button>
    <button @click="playMusic">播放音乐</button>
    <button @click="pauseMusic">音乐暂停</button>
    <button @click="musicLMute">左音响静音</button>
    <button @click="musicRMute">右音响静音</button>
    <input ref="songidInput" placeholder="请粘贴网易云分享链接" />
    <button @click="submite">确定</button>
    <!-- <p>{{ songurl }}</p> -->
  </div>
</template>

<script lang="ts" setup>
import { reqSongs, reqVideoUrl } from "@/api";
import { onMounted, ref } from "vue";

const songurl = ref();
const videoUrl = ref();
const songid = ref("1907240912");
const mvid = ref(10908372);
const songidInput = ref();
const getSongs = async (songid: string) => {
  const result = await reqSongs(songid);
  console.log("songs.value", result);
  songurl.value = result.data.data[0].url;
  console.log("songurl.value", songurl.value);
};
const getVideoUrl = async (mvid: number) => {
  const result = await reqVideoUrl(mvid);
  videoUrl.value = result.data.data.url;
  console.log("mv", result);
  // videoUrl.value = result.data
};

onMounted(() => {
  getSongs(songid.value);
  getVideoUrl(mvid.value);
});

//获取音视频数据
const submite = async () => {
  console.log(songidInput.value.value);
  const songidInputValue = songidInput.value.value;
  const songId = songidInputValue.split("?i")[1].split("=")[1].split("&")[0];
  console.log(songId);

  if (songidInputValue.includes("mv")) {
    video.value.src = "";
    getVideoUrl(songId)
      .then(() => {
        playVideo();
      })
      .catch();
  } else {
    musicL.value.src = "";
    musicR.value.src = "";
    getSongs(songId)
      .then(() => {
        playMusic();
      })
      .catch();
  }

  // songidInput.value.value = "";
  // playMusic();
};

//音视频播放
const video = ref();
const musicL = ref();
const musicR = ref();
const playVideo = () => {
  video.value.play();
};
const videoPause = () => {
  video.value.pause();
};
const playMusic = () => {
  musicL.value.play();
  musicR.value.play();
};
const pauseMusic = () => {
  musicL.value.pause();
  musicR.value.pause();
};
const musicLMute = () => {
  musicL.value.muted == true ? (musicL.value.muted = false) : (musicL.value.muted = true);
};
const musicRMute = () => {
  musicR.value.muted == true ? (musicR.value.muted = false) : (musicR.value.muted = true);
};
</script>

<style scoped>
video,
audio {
  display: none;
}
input {
  width: 100px;
  font-size: 10px;
  height: 15px;
}
</style>

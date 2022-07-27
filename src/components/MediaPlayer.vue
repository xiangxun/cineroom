<template>
  <div class="container">
    <video
      id="video"
      ref="videotarget"
      controls="true"
      crossOrigin="anonymous"
      :src="videoUrl"
    ></video>
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
    <button class="file-select-btn" @click="fileId.click()">
      选择本地文件
      <input type="file" ref="fileId" @change="getLocalAudio" class="file-input" />
    </button>
    <button @click="playVideo" class="play">播放视频</button>
    <button @click="videoPause" class="pause">视频暂停</button>
    <button @click="playMusic">播放音乐</button>
    <button @click="pauseMusic">音乐暂停</button>
    <button @click="musicLMute">左音响静音</button>
    <button @click="musicRMute">右音响静音</button>
    <input ref="songidInput" placeholder="请粘贴网易云分享链接" />
    <button @click="submit">确定</button>
  </div>
</template>

<script lang="ts" setup>
import { reqSongs, reqVideoUrl } from "@/api";
import { onMounted, ref } from "vue";

const fileId = ref();

const songurl = ref();
const videoUrl = ref();
const songid = ref("1907240912");
const mvid = ref(10908372);
const songidInput = ref();

//获取音视频
const getSongs = async (songid: string) => {
  const result = await reqSongs(songid);
  songurl.value = result.data.data[0].url;
};
const getVideoUrl = async (mvid: number) => {
  const result = await reqVideoUrl(mvid);
  videoUrl.value = result.data.data.url;
  console.log("mv", result);
};

onMounted(() => {
  getSongs(songid.value);
  getVideoUrl(mvid.value);
});

//通过输入获取音视频数据
const submit = async () => {
  console.log(songidInput.value.value);
  const songidInputValue = songidInput.value.value;
  const songId = songidInputValue?.split("?i")[1].split("=")[1].split("&")[0];
  console.log(songId);

  if (songidInputValue.includes("mv")) {
    videotarget.value.src = "";
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
};
//获取本地音视频文件
const getLocalAudio = () => {
  let objFile = fileId.value;
  console.log(objFile.value);
  if (objFile.value === "") {
    return false;
  }
  if (window.FileReader) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(objFile.files[0]);
    fileReader.onloadend = (e) => {
      songurl.value = e.target?.result;
      videoUrl.value = e.target?.result;
    };
  }
};

//音视频播放
const videotarget = ref();
const musicL = ref();
const musicR = ref();
const playVideo = () => {
  videotarget.value.play();
};
const videoPause = () => {
  videotarget.value.pause();
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

defineExpose({
  videotarget,
});
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
.file-select-btn .file-input {
  display: none;
}
</style>

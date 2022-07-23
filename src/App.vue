<template>
  <div class="three-canvas" ref="threeTarget"></div>
  <!-- <div id="blocker" ref="blocker"></div> -->
  <div class="container">
    <video id="video" ref="video" controls="true">
      <source src="/video/最伟大的作品.mp4" type="video/mp4" />
    </video>
    <audio id="musicL" preload="auto" ref="musicL" loop controls>
      <!-- <source src="audio/还在流浪.ogg" type="audio/ogg" />
      <source src="audio/还在流浪.mp3" type="audio/mpeg" /> -->
      <source src="/audio/说好了不散.mp3" type="audio/mpeg" />
    </audio>
    <audio id="musicR" preload="auto" ref="musicR" loop controls>
      <!-- <source src="audio/还在流浪.ogg" type="audio/ogg" /> -->
      <!-- <source src="audio/还在流浪.mp3" type="audio/mpeg" /> -->
      <source src="/audio/说好了不散.mp3" type="audio/mpeg" />
    </audio>
    <button @click="play" class="play">播放视频</button>
    <button @click="pause" class="pause">视频暂停</button>
    <button @click="playMusic">播放音乐</button>
    <button @click="pauseMusic">音乐暂停</button>
    <button @click="musicLMute">左音响静音</button>
    <button @click="musicRMute">右音响静音</button>
  </div>
  <div class="overlay" ref="overlay">
    <button @click="startButton" ref="start">Enter</button>
    <p class="tip">带上耳机食用更佳</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { TEngine } from "./assets/ts/TEngine";
import { basicObjectList } from "./assets/ts/TBasicObject";
import { lightsList } from "./assets/ts/TLight";

// import { helperList } from "./assets/ts/THelper";
// import { gltfObject } from "./assets/ts/TLoadModel";
// import { TCanvasTextureEditor } from "./assets/ts/TCanvasTextureEditor";

const threeTarget = ref();
const start = ref();
onMounted(() => {
  const TE = new TEngine(threeTarget.value);
  TE.addObject(...basicObjectList);
  TE.addObject(...lightsList);
  // TE.addObject(...helperList);
  start.value.addEventListener("click", function () {
    TE.playMusic(), false;
  });
});
const overlay = ref();

const startButton = () => {
  overlay.value.remove();
};

const video = ref();

const play = () => {
  video.value.play();
};
const pause = () => {
  video.value.pause();
};
const musicL = ref();
const musicR = ref();
const playMusic = () => {
  musicL.value.play();
  musicR.value.play();
};
const pauseMusic = () => {
  musicL.value.pause();
  musicR.value.pause();
};
const musicLMute = () => {
  musicL.value.muted == true
    ? (musicL.value.muted = false)
    : (musicL.value.muted = true);
};
const musicRMute = () => {
  musicR.value.muted == true
    ? (musicR.value.muted = false)
    : (musicR.value.muted = true);
};
</script>
<style scoped>
.three-canvas {
  width: 100%;
  height: 100%;
}
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 300px;
  left: 20px;
  bottom: 20px;
}
video,
audio {
  display: none;
}

button {
  background-color: transparent;
  border: 0.1px 0.1px;
  border-color: aqua;
  color: #ffffff;
  width: 100px;
  height: 30px;
  font-size: 14px;
  margin: 2px;
}
button:hover {
  background-color: aqua;
  color: blue;
}
#blocker {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.overlay {
  position: absolute;
  font-size: 16px;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
}
.tip {
  margin: 10px;
  color: aqua;
}
</style>

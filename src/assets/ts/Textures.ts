import { CanvasEditor } from "./CanvasEditor";
import { CanvasTexture, Texture, TextureLoader } from "three";
// const textureLoader: TextureLoader = new TextureLoader();
// export const pictureTexture: Texture = textureLoader.load("../logo.svg");
// export const infoTexture: CanvasTexture = new CanvasTexture();
// import { useStore } from "@/store";
// import { parseLyric, type LineItem } from "@/utils/lyric";
// let lrcArr1 = [];
// export const getLyricData = () => {
//   const store = useStore();
//   const lrc: string = store.lyric as string;
//   const lrcArr = parseLyric(lrc);
//   lrcArr1 = lrcArr;
//   // console.log(store.lyric);
//   console.log("lrcArr", lrcArr);
//   console.log("lrcArr1", lrcArr1[1].content);
// };

export const lyricTexture: CanvasTexture = new CanvasTexture(
  new CanvasEditor(1920, 1080).draw((ctx) => {
    ctx.fillStyle = "rgb(256, 150, 256)";
    ctx.beginPath();
    ctx.fillRect(0, 0, 1920, 1080);
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "80px 黑体";
    ctx.translate(960, 440);

    ctx.beginPath();
    ctx.fillText(`111`, 0, 100);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("时间：2022年7月28日", 0, 200);
    ctx.closePath();
  }).canvas
);

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EventDispatcher, Loader, TextureLoader } from "three";

const imageLoader = new TextureLoader();
export class LoaderManager extends EventDispatcher {
  total: number = 0;
  success: number = 0;
  error: number = 0;
  progress: number = 0;

  loaderMap: { [key: string]: Loader } = {
    jpg: imageLoader,
    gltf: new GLTFLoader(),
  };
  constructor() {
    super();
  }
  load(urls: string[]) {
    for (const url of urls) {
      const ext = url.split(".").pop();

      if (!ext || !this.loaderMap[ext]) {
        this.error += 1;
        console.log(`找不到支持的loader：${url}`);
      }
      const loader = this.loaderMap[ext];
      loader
        .loadAsync(url)
        .then((result) => {
          this.sourceMap[url] = result;
          this.success += 1;
        })
        .catch((err) => {
          this.error += 1;
        });
    }
  }
}

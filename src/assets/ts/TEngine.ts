import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Vector3,
  Object3D,
  sRGBEncoding,
  Box3,
  VideoTexture,
  LinearFilter,
  ClampToEdgeWrapping,
  BoxBufferGeometry,
  Mesh,
  MeshLambertMaterial,
  PositionalAudio,
  AudioListener,
  AudioLoader,
  SphereGeometry,
  MeshBasicMaterial,
  MeshPhongMaterial,
  Vector2,
  Raycaster,
  MOUSE,
  Box3Helper,
  type Event,
  Color,
  MeshStandardMaterial,
  Material,
} from "three";
// import Stats from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PositionalAudioHelper } from "three/examples/jsm/helpers/POsitionalAudioHelper";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { EventManager } from "./EventManager";
// import { TEventManager } from "./TEventManager";
export class TEngine {
  private dom: HTMLElement;
  private renderer: WebGLRenderer;
  // private transformControls: TransformControls;
  private eventManager: EventManager;
  private scene: Scene;
  private camera: PerspectiveCamera;
  // private listener: AudioListener;
  // private raycaster: Raycaster;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    const renderer = new WebGLRenderer({
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = sRGBEncoding;
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      45,
      dom.offsetWidth / dom.offsetHeight,
      1,
      10000
    );
    camera.position.set(-40, 30, 7);
    camera.lookAt(new Vector3(0, 0, 0));
    camera.up = new Vector3(0, 1, 0);

    //添加视频
    const video: HTMLVideoElement = document.getElementById(
      "video"
    ) as HTMLVideoElement;
    console.log(video);
    const videoTexture = new VideoTexture(video);
    videoTexture.wrapS = videoTexture.wrapT = ClampToEdgeWrapping;
    videoTexture.minFilter = LinearFilter;
    // const videoMaterial = new MeshLambertMaterial({ map: videoTexture });
    const videoMaterial = new MeshBasicMaterial({ map: videoTexture });
    const screen = new Mesh(new BoxBufferGeometry(0.01, 27, 51), videoMaterial);
    screen.position.set(43, -6, -1.5);
    // screen.addEventListener("mouseenter", () => {
    //   console.log("screen mouseEnter");
    // });
    // screen.addEventListener("mousemove", () => {
    //   console.log("screen mousemove");
    // });
    // screen.addEventListener("mouseleave", () => {
    //   console.log("screen mouseleave");
    // });
    scene.add(screen);

    //初始化OrbitControls
    const orbitControls: OrbitControls = new OrbitControls(
      camera,
      renderer.domElement
    );
    orbitControls.enableDamping = true;
    orbitControls.mouseButtons = {
      // LEFT: MOUSE.DOLLY,
      LEFT: null as unknown as MOUSE,
      MIDDLE: MOUSE.PAN,
      RIGHT: MOUSE.ROTATE,
    };

    //初始化transformControls
    const transformControls: TransformControls = new TransformControls(
      camera,
      renderer.domElement
    );
    // transformControls.setSize(0.5);
    // scene.add(transformControls);

    //判断此次鼠标事件是否为变换事件
    let transFlag = false;
    transformControls.addEventListener("mouseDown", () => {
      transFlag = true;
    });
    let timer: number | undefined;

    //初始化射线
    // const raycaster = new Raycaster();
    // const raycaster1 = new Raycaster();

    //给renderer的canvas对象添加鼠标事件
    // const mouse = new Vector2();
    let cacheObject: Mesh | null = null;
    //事件管理
    const eventManager = new EventManager({
      dom: renderer.domElement,
      scene: scene,
      camera: camera,
    });
    eventManager.addEventListener("mousemove", (event) => {
      if (event.intersects.length) {
        const intersected = event.intersects[0].object;
        // INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
        // INTERSECTED.material.emissive.setHex( 0xff0000 );

        // 对比新老物体
        if (intersected === cacheObject) {
          return;
        } else if (intersected !== cacheObject && cacheObject) {
          (cacheObject.material as MeshBasicMaterial).color.multiplyScalar(0.1);
          (cacheObject.material as MeshBasicMaterial).transparent = false;
          // (cacheObject.material as MeshLambertMaterial).emissive.set(1);
        }
        if (intersected.material) {
          intersected.material.color.multiplyScalar(10);
          intersected.material.transparent = true;
          intersected.material.opacity = 0.01;

          // intersected.material.emissive.setHex(0xffff00);
          cacheObject = intersected;
        }
      } else {
        if (cacheObject) {
          (cacheObject.material as MeshBasicMaterial).color.multiplyScalar(0.1);
          (cacheObject.material as MeshBasicMaterial).transparent = false;
          // (cacheObject.material as MeshLambertMaterial).emissive.set(1);

          cacheObject = null;
        }
      }
    });

    // renderer.domElement.addEventListener("mousemove", (event) => {
    //   mouse.x = 2 * (event.clientX / window.innerWidth) - 1;
    //   mouse.y = -2 * (event.clientY / window.innerHeight) + 1;
    //   scene.remove(transformControls);
    //   raycaster2.setFromCamera(mouse, camera);
    //   const intersection = raycaster2.intersectObjects(scene.children);
    //   // scene.add(transformControls);
    //   if (intersection.length) {
    //     const object = intersection[0].object;
    //     if (object !== cacheObject) {
    //       if (cacheObject) {
    //         cacheObject.dispatchEvent({
    //           type: "mouseleave",
    //         });
    //       }
    //       object.dispatchEvent({
    //         type: "mouseenter",
    //       });
    //     } else if (object === cacheObject) {
    //       object.dispatchEvent({
    //         type: "mousemove",
    //       });
    //     }
    //     cacheObject = object;
    //   } else {
    //     if (cacheObject) {
    //       cacheObject.dispatchEvent({
    //         type: "mouseleave",
    //       });
    //     }
    //     cacheObject = null;
    //   }
    // });

    // const clickEvent = (event: MouseEvent | Touch) => {
    //   mouse.x = 2 * (event.clientX / window.innerWidth) - 1;
    //   mouse.y = -2 * (event.clientY / window.innerHeight) + 1;
    //   clearTimeout(timer);
    //   timer = setTimeout(() => {
    //     if (transFlag) {
    //       transFlag = false;
    //       return false;
    //     }
    //     console.log("click");
    //     raycaster.setFromCamera(mouse, camera);
    //     scene.remove(transformControls);
    //     const intersection = raycaster.intersectObjects(scene.children);
    //     if (intersection.length) {
    //       const object = intersection[0].object;
    //       console.log("click", object);
    //       scene.add(transformControls);
    //       transformControls.attach(object);
    //     }
    //   }, 300);
    // };
    // const delclickEvent = () => {
    //   clearTimeout(timer);
    //   raycaster1.setFromCamera(mouse, camera);
    //   scene.remove(transformControls);
    //   const intersection = raycaster1.intersectObjects(scene.children);
    //   if (intersection.length) {
    //     const object = intersection[0].object;
    //     camera.lookAt(object.position);
    //     orbitControls.target = object.position;
    //     const box = new Box3().setFromObject(object);
    //     const helper = new Box3Helper(box);
    //     helper.raycast = () => {};
    //     scene.add(helper);
    //     console.log(object);
    //   }
    //   console.log("delclick");
    // };
    document.addEventListener("keyup", (event) => {
      console.log(event);
      switch (event.key) {
        case "e":
          transformControls.mode = "translate";
          break;
        case "r":
          transformControls.mode = "rotate";
          break;
        case "s":
          transformControls.mode = "scale";
          break;

        default:
          break;
      }
    });
    // renderer.domElement.addEventListener("click", clickEvent);
    // renderer.domElement.addEventListener("dblclick", delclickEvent);

    dom.appendChild(renderer.domElement);
    renderer.setSize(dom.offsetWidth, dom.offsetHeight);
    renderer.render(scene, camera);

    const animate = () => {
      orbitControls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    window.addEventListener("resize", () => {
      //更新相机
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      //更新渲染
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    this.eventManager = eventManager;
    // this.raycaster = raycaster;
    this.renderer = renderer;
    this.camera = camera;
    this.scene = scene;
  }
  playMusic() {
    const listener = new AudioListener();
    this.camera.add(listener);
    const randomColor: number = 0xffffff * Math.random();

    const audioL: HTMLAudioElement = document.getElementById(
      "musicL"
    ) as HTMLAudioElement;
    audioL.play();
    const positionalAudioL = new PositionalAudio(listener);
    positionalAudioL.setMediaElementSource(audioL);
    positionalAudioL.setRefDistance(100);
    positionalAudioL.setMaxDistance(120);
    positionalAudioL.setDirectionalCone(120, 230, 0.1);
    const helperL = new PositionalAudioHelper(positionalAudioL, 0);
    helperL.raycast = () => {};
    positionalAudioL.add(helperL);
    const playerL = new Mesh(
      new SphereGeometry(0.5, 50, 50),
      new MeshBasicMaterial({
        color: randomColor,
      })
    );
    playerL.position.set(40, -6, -28);
    playerL.rotation.y -= (Math.PI * 1) / 5;
    playerL.add(positionalAudioL);
    this.scene.add(playerL);

    const audioR: HTMLAudioElement = document.getElementById(
      "musicR"
    ) as HTMLAudioElement;
    audioR.play();
    const positionalAudioR = new PositionalAudio(listener);
    positionalAudioR.setMediaElementSource(audioR);
    positionalAudioR.setRefDistance(100);
    positionalAudioR.setMaxDistance(120);
    positionalAudioR.setDirectionalCone(120, 230, 0.1);
    const helperR = new PositionalAudioHelper(positionalAudioR, 0);
    helperR.raycast = () => {};
    positionalAudioR.add(helperR);
    const playerR = new Mesh(
      new SphereGeometry(0.5, 50, 50),
      new MeshBasicMaterial({
        color: randomColor,
      })
    );
    playerR.position.set(40, -6, 25);
    playerR.rotation.y += (Math.PI * 5) / 4;
    playerR.add(positionalAudioR);
    this.scene.add(playerR);
  }
  addObject(...object: Object3D[]) {
    object.forEach((elem) => {
      this.scene.add(elem);
    });
  }
}

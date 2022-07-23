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
} from "three";
// import Stats from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PositionalAudioHelper } from "three/examples/jsm/helpers/POsitionalAudioHelper";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
// import { TEventManager } from "./TEventManager";
export class TEngine {
  private dom: HTMLElement;
  private renderer: WebGLRenderer;
  // private transformControls: TransformControls;
  // private eventManager: TEventManager;
  private scene: Scene;
  private camera: PerspectiveCamera;
  // private listener: AudioListener;
  private raycaster: Raycaster;

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

    const gltfloader = new GLTFLoader();
    // Load a glTF resource
    gltfloader.load(
      // resource URL
      // "gltfModel/buildingDraco.gltf",
      "gltfModel/cineRoom.glb",
      // called when the resource is loaded
      (gltf) => {
        const object = gltf.scene;
        //1.调整物体位置
        const box = new Box3().setFromObject(object);
        // const size = box.getSize(new Vector3()).length();
        const center = box.getCenter(new Vector3());
        object.position.x += object.position.x - center.x;
        object.position.y += object.position.y - center.y;
        object.position.z += object.position.z - center.z;
        // object.position.y = 2.5;
        console.log("@", gltf.scene);
        scene.add(object);
      }
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
    const videoMaterial = new MeshLambertMaterial({ map: videoTexture });
    const screen = new Mesh(new BoxBufferGeometry(0.01, 27, 51), videoMaterial);
    screen.position.set(43, -6, -1.5);
    // screen.add(positionalAudio);
    scene.add(screen);

    //初始化OrbitControls
    const orbitControls: OrbitControls = new OrbitControls(
      camera,
      renderer.domElement
    );
    orbitControls.enableDamping = true;
    orbitControls.mouseButtons = {
      LEFT: null as unknown as MOUSE,
      MIDDLE: MOUSE.PAN,
      RIGHT: MOUSE.ROTATE,
    };

    //初始化transformControls
    const transformControls: TransformControls = new TransformControls(
      camera,
      renderer.domElement
    );
    scene.add(transformControls);

    //判断此次鼠标事件是否为变换事件
    let transFlag = false;
    transformControls.addEventListener("mouseDown", () => {
      transFlag = true;
    });
    let timer: number | undefined;

    //初始化射线
    const raycaster = new Raycaster();
    const raycaster1 = new Raycaster();

    //给renderer的canvas对象添加鼠标事件
    const mouse = new Vector2();
    renderer.domElement.addEventListener("mousemove", (event) => {
      mouse.x = 2 * (event.clientX / window.innerWidth) - 1;
      mouse.y = -2 * (event.clientY / window.innerHeight) + 1;
      // console.log(mouse.x, mouse.y);
    });

    const clickEvent = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (transFlag) {
          transFlag = false;
          return false;
        }
        console.log("click");
        raycaster.setFromCamera(mouse, camera);
        scene.remove(transformControls);
        const intersection = raycaster.intersectObjects(scene.children);
        if (intersection.length) {
          const object = intersection[0].object;
          console.log("click", object);

          // camera.lookAt(object.position);
          // orbitControls.target = object.position;
          scene.add(transformControls);
          transformControls.attach(object);
        }
      }, 300);
    };
    const delclickEvent = () => {
      clearTimeout(timer);
      raycaster1.setFromCamera(mouse, camera);
      scene.remove(transformControls);
      const intersection1 = raycaster1.intersectObjects(scene.children);
      if (intersection1.length) {
        const object1 = intersection1[0].object;
        camera.lookAt(object1.position);
        orbitControls.target = object1.position;
        const box = new Box3().setFromObject(object1);
        const helper = new Box3Helper(box);
        helper.raycast = () => {};
        scene.add(helper);
        console.log(object1);
      }
      console.log("delclick");
    };
    renderer.domElement.addEventListener("click", clickEvent);
    renderer.domElement.addEventListener("dblclick", delclickEvent);

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

    this.raycaster = raycaster;
    this.renderer = renderer;
    this.camera = camera;
    this.scene = scene;
  }
  playMusic() {
    const listener = new AudioListener();
    this.camera.add(listener);

    const audioL: HTMLAudioElement = document.getElementById(
      "musicL"
    ) as HTMLAudioElement;
    audioL.play();
    const positionalAudioL = new PositionalAudio(listener);
    positionalAudioL.setMediaElementSource(audioL);
    positionalAudioL.setRefDistance(100);
    positionalAudioL.setMaxDistance(120);
    positionalAudioL.setDirectionalCone(120, 230, 0.1);
    const helperL = new PositionalAudioHelper(positionalAudioL, 1);
    helperL.raycast = () => {};
    positionalAudioL.add(helperL);
    const playerL = new Mesh(
      new SphereGeometry(0.5, 50, 50),
      new MeshBasicMaterial({
        color: 0xffffff * Math.random(),
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
    const helperR = new PositionalAudioHelper(positionalAudioR, 1);
    helperR.raycast = () => {};
    positionalAudioR.add(helperR);
    const playerR = new Mesh(
      new SphereGeometry(0.5, 50, 50),
      new MeshBasicMaterial({
        color: 0xffffff * Math.random(),
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

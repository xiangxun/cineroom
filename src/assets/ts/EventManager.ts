import {
  Camera,
  EventDispatcher,
  Object3D,
  Raycaster,
  Scene,
  Vector2,
} from "three";

export interface EventManagerParameters {
  dom: HTMLCanvasElement;
  scene: Scene;
  camera: Camera;
}

export class EventManager extends EventDispatcher {
  private raycaster: Raycaster = new Raycaster();
  private mouse: Vector2 = new Vector2();
  private dom: HTMLCanvasElement;
  private scene: Scene;
  private camera: Camera;
  constructor(params: EventManagerParameters) {
    super();
    this.dom = params.dom;
    this.scene = params.scene;
    this.camera = params.camera;

    const mouse = this.mouse;
    const raycaster = this.raycaster;
    const dom = params.dom;

    let cacheObject: Object3D | null = null;
    dom.addEventListener("mousemove", (event) => {
      mouse.x = 2 * (event.clientX / dom.offsetWidth) - 1;
      mouse.y = -2 * (event.clientY / dom.offsetHeight) + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersection = raycaster.intersectObjects(scene.children);
      if (intersection.length) {
        const object = intersection[0].object;
        if (object !== cacheObject) {
          if (cacheObject) {
            cacheObject.dispatchEvent({
              type: "mouseleave",
            });
          }
          object.dispatchEvent({
            type: "mouseenter",
          });
        } else if (object === cacheObject) {
          object.dispatchEvent({
            type: "mousemove",
          });
        }
        cacheObject = object;
      } else {
        if (cacheObject) {
          cacheObject.dispatchEvent({
            type: "mouseleave",
          });
        }
        cacheObject = null;
      }
    });
  }
}

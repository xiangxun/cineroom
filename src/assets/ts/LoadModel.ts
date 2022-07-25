import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Box3, Group, Vector3 } from "three";
// import type { Object3D } from "three";

// export const gltfObject: Group[] = [];

// // Instantiate a loader
// const gltfloader = new GLTFLoader();
// // Optional: Provide a DRACOLoader instance to decode compressed mesh data
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath(
//   "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"
// );
// gltfloader.setDRACOLoader(dracoLoader);

// // Load a glTF resource
// gltfloader.load(
//   // resource URL
//   // "gltfModel/buildingDraco.gltf",
//   "gltfModel/cineRoom.glb",
//   // called when the resource is loaded
//   (gltf) => {
//     const object = gltf.scene;
//     //1.调整物体位置
//     const box = new Box3().setFromObject(object);
//     // const size = box.getSize(new Vector3()).length();
//     const center = box.getCenter(new Vector3());
//     object.position.x += object.position.x - center.x;
//     object.position.y += object.position.y - center.y;
//     object.position.z += object.position.z - center.z;
//     // object.position.y = 5;
//     console.log("@", gltf.scene);

//     gltfObject.push(object);
//   }
// );

// export const gltfPromise = new Promise((resolve, reject) => {});

const gltfLoader: GLTFLoader = new GLTFLoader();
export const gltfPromise = gltfLoader.loadAsync(
  // "/gltfModel/buildingDraco.gltf"
  "/gltfModel/cineRoom.glb"
);

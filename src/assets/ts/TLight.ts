import { AmbientLight, Object3D, PointLight, SpotLight } from "three";

export const lightsList: Object3D[] = [];

const ambientLight: AmbientLight = new AmbientLight(
  0xffffff * Math.random(),
  0.1
);

export const pointLight: PointLight = new PointLight(
  0xffffff * Math.random(),
  0.2
);
pointLight.position.set(-25, 15, 0);
pointLight.castShadow = true;

export const spotLight: SpotLight = new SpotLight(
  0xffffff * Math.random(),
  10,
  100,
  (Math.PI / 180) * 10
);
spotLight.castShadow = true;
spotLight.position.set(-50, 30, -1);

lightsList.push(ambientLight, pointLight, spotLight);

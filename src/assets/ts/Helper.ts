import {
  AxesHelper,
  GridHelper,
  Object3D,
  PlaneHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { clipPlane } from "./ClippingBox";
import { pointLight, spotLight } from "./Light";

export const helperList: Object3D[] = [];
const axesHelper: AxesHelper = new AxesHelper(500);

const gridHelper: GridHelper = new GridHelper(500, 20, 0xeeeeee, 0xaaaaaa);
gridHelper.position.y = -25;
const pointLightHelper: PointLightHelper = new PointLightHelper(
  pointLight,
  2,
  0xffffff
);
const spotLightHelper: SpotLightHelper = new SpotLightHelper(
  spotLight,
  0xffffff
);
const planeHelper = new PlaneHelper(clipPlane, 200, 0xffff00);

helperList.push(
  axesHelper,
  gridHelper,
  pointLightHelper,
  spotLightHelper,
  planeHelper
);

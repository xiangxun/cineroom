import {
  AxesHelper,
  GridHelper,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { pointLight, spotLight } from "./TLight";

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

helperList.push(axesHelper, gridHelper, pointLightHelper, spotLightHelper);

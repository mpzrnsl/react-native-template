/**
 * ProjectName
 *
 * React Native SVG Transformer Declarations
 *
 * Author: Phia Nasol
 *
 */

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;

  export default content;
}

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Asset13SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Asset13SvgIcon(props: Asset13SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 65 65"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"32.5"}
        cy={"32.5"}
        r={"32"}
        fill={"#fff"}
        stroke={"#000"}
        strokeMiterlimit={"10"}
      ></circle>
    </svg>
  );
}

export default Asset13SvgIcon;
/* prettier-ignore-end */

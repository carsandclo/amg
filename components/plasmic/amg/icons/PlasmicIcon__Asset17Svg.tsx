// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Asset17SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Asset17SvgIcon(props: Asset17SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64.01"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M32.02 0C49.72.02 64.01 14.33 64 32.02c-.01 17.71-14.37 32.02-32.09 31.99C14.29 63.98-.03 49.61 0 31.98.03 14.28 14.35-.02 32.02 0zm-8.08 26v6.05h3.56v17.31h7.18V32h4.8c.21-2.03.42-3.98.63-6.02h-5.43V23.2c.02-2.22.42-2.62 2.67-2.63h2.69v-6.11c-2.45.12-4.87.07-7.25.39-3.03.42-4.79 2.37-5.12 5.41-.18 1.61-.12 3.25-.17 4.87v.85h-3.55z"
        }
      ></path>
    </svg>
  );
}

export default Asset17SvgIcon;
/* prettier-ignore-end */

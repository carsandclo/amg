// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Asset14SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Asset14SvgIcon(props: Asset14SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 66.19"}
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
          "M31.69 0h.52c.3.04.59.1.89.11 2.95.08 5.85.51 8.63 1.47 10.72 3.73 17.85 10.99 21.01 21.93 2.1 7.26 1.55 14.44-1.51 21.35-3.42 7.72-9.03 13.34-16.84 16.6-6.7 2.79-13.59 3.51-20.64 1.24-.27-.09-.65-.05-.9.07-1.78.86-3.53 1.8-5.33 2.64-.79.37-1.65.7-2.5.78-3.35.28-6.14-2.29-6.22-5.66-.04-1.92-.04-3.84 0-5.75.02-.69-.2-1.15-.69-1.62-2.76-2.65-4.97-5.72-6.15-9.36-3.11-9.55-2.69-18.91 2.41-27.71C9.63 7.03 17.63 1.86 27.97.33 29.2.15 30.45.11 31.69 0zm-17.1 60.37c.35-.16.57-.25.77-.35 1.93-.96 3.9-1.85 5.76-2.92 1.2-.69 2.25-.77 3.55-.26 5.03 1.99 10.16 1.73 15.2.12 7.02-2.25 12.32-6.7 15.53-13.36 3.99-8.28 3.81-16.61-.79-24.59C48.79 8.91 37.75 4.04 26.5 6.49c-8.08 1.76-14.02 6.45-17.85 13.78C6.17 25 5.57 30.08 6 35.34c.32 3.82 1.31 7.41 3.53 10.6 1.29 1.86 2.9 3.41 4.56 4.92.35.31.5.64.49 1.12-.02 2.52-.01 5.04-.01 7.56v.83z"
        }
      ></path>

      <path
        d={
          "M14.56 20.74c.12-.45.2-.99.41-1.48.68-1.64 1.8-2.93 3.3-3.87 2.08-1.29 3.72-1.07 5.22.86 1.08 1.39 1.95 2.93 2.91 4.42.25.4.48.82.68 1.25.62 1.31.32 2.61-.79 3.54-.48.4-.96.8-1.41 1.24-.96.94-1.07 1.6-.28 2.68a38.43 38.43 0 002.87 3.48c2.28 2.44 4.69 4.76 7.47 6.64 1.26.85 1.77.77 2.72-.42.27-.34.51-.69.76-1.04 1.07-1.49 2.49-1.83 4.04-.84 1.62 1.03 3.17 2.16 4.73 3.26.47.33.91.73 1.34 1.12.9.81 1.19 1.77.65 2.85-1.19 2.37-3.03 4.05-5.6 4.84-1.22.37-2.36-.12-3.45-.53-10-3.79-17.75-10.22-22.6-19.85-1.14-2.25-1.86-4.72-2.76-7.09-.11-.3-.13-.63-.21-1.04z"
        }
      ></path>
    </svg>
  );
}

export default Asset14SvgIcon;
/* prettier-ignore-end */

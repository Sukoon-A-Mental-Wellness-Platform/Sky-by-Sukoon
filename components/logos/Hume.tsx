import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

export default function HumeLogo(props: HumeLogoProps) {
  const id = useId();

  const gradientId = `hume-logo-gradient-${id}`;

  return (
  <>
    <b><h1>Sky</h1></b>
    <i><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; by Sukoon</p></i>
  </>
  );
}

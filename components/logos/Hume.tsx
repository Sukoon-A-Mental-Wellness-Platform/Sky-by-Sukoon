import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

export default function HumeLogo(props: HumeLogoProps) {
  const id = useId();

  const gradientId = `hume-logo-gradient-${id}`;

  return (
  <>
  <img src="/logo1.png" alt="logo" className="ml-7 md:-ml-52 scale-125 md:mt-3 md:scale-[.5]"/>
  </>
  );
}

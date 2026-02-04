import type { GlassIconProps } from "./types";
import { DEFAULT_GLASS_ICON_SIZE } from "./types";
import { GlassIconFromRaw } from "./GlassIconFromRaw";
import iconSvg from "./figma-export/icon-7-clock.svg?raw";

export function GlassClock({
  size = DEFAULT_GLASS_ICON_SIZE,
  className = "",
}: GlassIconProps) {
  return <GlassIconFromRaw svg={iconSvg} size={size} className={className} />;
}

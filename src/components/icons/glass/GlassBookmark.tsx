import type { GlassIconProps } from "./types";
import { DEFAULT_GLASS_ICON_SIZE } from "./types";
import { GlassIconFromRaw } from "./GlassIconFromRaw";
import iconSvg from "./figma-export/icon-2-bookmark.svg?raw";

export function GlassBookmark({
  size = DEFAULT_GLASS_ICON_SIZE,
  className = "",
}: GlassIconProps) {
  return <GlassIconFromRaw svg={iconSvg} size={size} className={className} />;
}

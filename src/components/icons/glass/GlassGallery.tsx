import type { GlassIconProps } from "./types";
import { DEFAULT_GLASS_ICON_SIZE } from "./types";
import { GlassIconFromRaw } from "./GlassIconFromRaw";
import iconSvg from "./figma-export/icon-9-gallery.svg?raw";

export function GlassGallery({
  size = DEFAULT_GLASS_ICON_SIZE,
  className = "",
}: GlassIconProps) {
  return <GlassIconFromRaw svg={iconSvg} size={size} className={className} />;
}

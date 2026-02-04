import type { GlassIconProps } from "./types";

interface GlassIconFromRawProps extends GlassIconProps {
  svg: string;
}

export function GlassIconFromRaw({
  svg,
  size = 24,
  className = "",
}: GlassIconFromRawProps) {
  let html = svg
    .replace(/\bwidth="[^"]*"/, `width="${size}"`)
    .replace(/\bheight="[^"]*"/, `height="${size}"`);
  if (className.trim()) {
    const safeClass = className.replace(/"/g, "&quot;");
    html = html.replace(/<svg /, `<svg class="${safeClass}" `);
  }
  return (
    <span
      className="inline-block shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

# Glass Icons

React components for **Iconly Pro – Glass Icons** (Figma: [Iconly Pro – Glass Icons – Community](https://www.figma.com/design/sAJwHShYt7jKJkfcMEXTWR/Iconly-Pro--Glass-Icons--Community-?node-id=1-1047)).

The first 10 components use SVGs exported from that Figma file (frame **Iconly Glass**, node `1:1047`): each component name matches its SVG file in `figma-export/` (e.g. `GlassTick` ↔ `icon-1-tick.svg`, `GlassBookmark` ↔ `icon-2-bookmark.svg`, etc.).

## Usage

Each icon is a React component with an optional `size` (default `24`) and `className`:

```tsx
import { GlassTick, GlassBookmark, GlassHeart } from "@/components";

<GlassTick size={32} />
<GlassBookmark size={20} className="text-blue-500" />
<GlassHeart />
```

## Available icons (match SVG filenames in `figma-export/`)

- `GlassTick` – `icon-1-tick.svg`
- `GlassBookmark` – `icon-2-bookmark.svg`
- `GlassHeart` – `icon-3-heart.svg`
- `GlassChat` – `icon-4-chat.svg`
- `GlassStar` – `icon-5-star.svg`
- `GlassArrow` – `icon-6-arrow.svg`
- `GlassClock` – `icon-7-clock.svg`
- `GlassDiscovery` – `icon-8-discovery.svg`
- `GlassGallery` – `icon-9-gallery.svg`
- `GlassBuy` – `icon-10-buy.svg`  

## Adding more icons from Figma

1. Open the [Figma file](https://www.figma.com/design/sAJwHShYt7jKJkfcMEXTWR/Iconly-Pro--Glass-Icons--Community-?node-id=1-1047).
2. Select an icon frame and export as **SVG**.
3. Create a new file `Glass<Name>.tsx` in this folder using this template:

```tsx
import type { GlassIconProps } from "./types";
import { DEFAULT_GLASS_ICON_SIZE } from "./types";

export function Glass<Name>({
  size = DEFAULT_GLASS_ICON_SIZE,
  className = "",
}: GlassIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Paste the <path> (and any <circle>, etc.) from the exported SVG here.
          Use fill="currentColor" so the icon inherits text color. */}
    </svg>
  );
}
```

4. Export the new component from `index.ts`.

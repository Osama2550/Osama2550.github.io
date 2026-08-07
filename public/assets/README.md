# Assets

Drop your real files into these folders using the exact names below, then update the matching
path in `src/data/profile.ts`. No component code needs to change — the site falls back to a
generated placeholder graphic for any image field left empty in that file.

```
images/profile/profile.jpg       Your headshot / profile photo (square, >= 800x800px)
images/projects/<slug>.jpg       One cover image per project (16:9, >= 1200x675px)
images/projects/<slug>/*.jpg     Extra screenshots for a project's gallery/detail view
icons/                           Any custom SVG icons not covered by lucide-react
3d/                              GLTF/GLB 3D models (e.g. hero-object.glb)
videos/                          Project demo clips (mp4/webm, keep under a few MB, or link externally)
textures/                        HDRI / texture maps for 3D materials
fonts/                           Self-hosted font files, if not using next/font
```

## Wiring a new image in

1. Add the file to the matching folder above.
2. Open `src/data/profile.ts`.
3. Set the relevant `image` field to `/assets/images/...` (path is relative to `/public`).

That's it — the placeholder art is replaced automatically wherever that field is used.

/** Prefix a file under /public with the GitHub Pages project path when needed. */
export function publicAsset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

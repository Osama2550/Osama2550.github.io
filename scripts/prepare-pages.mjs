import { copyFile, mkdir } from "node:fs/promises";

await mkdir("out", { recursive: true });
await copyFile("app-ads.txt", "out/app-ads.txt");

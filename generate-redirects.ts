import { writeFile } from "fs/promises";

const content = Array.from({ length: 2500 }).map((_, i) => [
  `/my-source-path-${i + 1}`,
  `/my-destination-path-${i + 1}`,
]);

(async () => {
  await writeFile(
    "./redirects.json",
    JSON.stringify(content, null, 2),
    "utf-8"
  );
})();

import { exec } from "child_process";
import { promisify } from "util";

export const dynamic = "force-dynamic";

const execAsync = promisify(exec);
async function command(cmd: string) {
  const { stdout } = await execAsync(cmd);
  return stdout;
}

console.log(process.env);

export default async function Home() {
  return <pre>{await command("ls -al")}</pre>;
}

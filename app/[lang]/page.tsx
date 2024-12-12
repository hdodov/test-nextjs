import { getLangResolve } from "../contexts";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  getLangResolve()(lang);

  const timer = `render-${Date.now()}`;
  console.time(timer);
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 500)); // simulate db call
  const output = <h1 className="text-6xl">lang {lang}</h1>;
  console.timeEnd(timer);
  return output;
}

import { getLangResolve } from "../contexts";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  getLangResolve()(lang);
  return <h1 className="text-6xl">lang {lang}</h1>;
}

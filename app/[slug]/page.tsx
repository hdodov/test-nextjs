import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamic = "error";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Home(props: Props) {
  const slug = (await props.params).slug;
  if (slug !== "world") notFound();

  return (
    <h1 className="text-6xl">
      hello {slug} {Date.now()}
    </h1>
  );
}

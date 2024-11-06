export const revalidate = 0;
export const dynamic = "force-dynamic";

export default function NotFound() {
  return <h1 className="text-6xl">not found {Date.now()}</h1>;
}

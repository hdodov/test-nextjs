import { revalidatePath } from "next/cache";

export const revalidate = 180;
export const dynamic = "error";

type Props = {
  params: Promise<{ attrs?: string | string[] }>;
};

export default async function Page({ params }: Props) {
  const { attrs } = await params;
  console.log("Rendering params", JSON.stringify(attrs));

  return (
    <form
      action={async (data) => {
        "use server";
        const path = data.get("path");
        const page = !!data.get("page");
        if (typeof path === "string") {
          console.log("revalidate", path, page);
          revalidatePath(path, page ? "page" : undefined);
        }
      }}
    >
      <input type="text" name="path" />
      page: <input type="checkbox" name="page" />
      <button>Submit</button>
      <pre>{JSON.stringify(attrs)}</pre>
    </form>
  );
}

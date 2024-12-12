import serverContext from "server-only-context";

export const [getLangResolve, setLangResolve] = serverContext<
  (lang: string) => void
>(() => {});

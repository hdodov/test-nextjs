import { setLangResolve } from "./contexts";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await new Promise<string>((resolve) => {
    console.time("resolve");
    setLangResolve((v) => {
      console.timeEnd("resolve");
      resolve(v);
    });
    setTimeout(() => resolve("en"), 100);
  });
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}

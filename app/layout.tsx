import { setLangResolve } from "./contexts";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await new Promise<string>((resolve) => {
    setLangResolve(resolve);
    setTimeout(() => resolve("en"), 1000);
  });
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}

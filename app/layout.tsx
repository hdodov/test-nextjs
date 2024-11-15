// @ts-expect-error raw module via Webpack
import inlineScript from "../inline-scripts/test";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: inlineScript.replace("{{ value }}", process.env.MY_VALUE),
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

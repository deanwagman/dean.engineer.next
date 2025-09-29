import "./globals.css";
import { ibmPlexSans } from "./fonts";
import Image from "next/image";

import ViewportSizer from "./components/ViewportSizer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlClassNames = [ibmPlexSans.className].join(" ");

  return (
    <html lang="en" className={htmlClassNames}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <link
        rel="icon"
        type="image/png"
        href="/favicon-48x48.png"
        sizes="48x48"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <head />
      <body>
        {children}

        <div id="modal-root" />

        <ViewportSizer />
      </body>
    </html>
  );
}

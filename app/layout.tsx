import "./globals.css";
import { useRouter } from "next/router";
import { ibmPlexSans } from "./fonts";
import Image from "next/image";

import { usePathname } from "next/navigation";

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
      <head />
      <body>
        {children}

        <div id="modal-root" />

        <ViewportSizer />
      </body>
    </html>
  );
}

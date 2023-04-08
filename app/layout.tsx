import "./globals.css";
import { useRouter } from "next/router";
import { ibmPlexSans } from "./fonts";

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
        <svg style={{ width: 0, height: 0, display: "none" }}>
          <defs>
            <filter id="plasma">
              <feTurbulence baseFrequency="0.009" numOctaves="5" seed="2">
                <animate
                  attributeName="baseFrequency"
                  dur="240s"
                  values="0.005;0.02;0.005"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="50" />
            </filter>

            <filter id="plasma-menu">
              <feTurbulence baseFrequency="0.009" numOctaves="5" seed="2">
                <animate
                  attributeName="baseFrequency"
                  dur="60s"
                  values="0.005;0.02;0.005"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="100" />
            </filter>

            <filter id="noise" x="0" y="0" width="500" height="500">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="5"
                result="noise"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
          </defs>
        </svg>

        {children}

        <div id="modal-root" />
      </body>
    </html>
  );
}

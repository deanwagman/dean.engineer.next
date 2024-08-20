import {
  Orbitron,
  Montserrat,
  IBM_Plex_Sans,
  Source_Code_Pro,
} from "next/font/google";

export const orbitron = Orbitron({ subsets: ["latin"] });
export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

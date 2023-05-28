import dynamic from "next/dynamic";
import { Navigation } from "../components/Nav";
import { BackdropFilterProvider } from "../contexts/backdrop-filter";

import styles from "./styles/layouts.module.css";

const PlatformWebGL = dynamic(() => import("../components/PlatformWebGL"));

export const CenterLayout = ({ children }: { children: any }) => {
  return (
    <BackdropFilterProvider>
      <div className={styles.centerLayout}>
        <Navigation />
        <div className={styles.mainColumn}>{children}</div>
      </div>
      <PlatformWebGL />
    </BackdropFilterProvider>
  );
};

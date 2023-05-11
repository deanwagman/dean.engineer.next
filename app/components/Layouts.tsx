import dynamic from "next/dynamic";
import { Navigation } from "../components/Nav";

import styles from "./styles/layouts.module.css";

const PlatformWebGL = dynamic(() => import("../components/PlatformWebGL"));

export const CenterLayout = ({ children }: { children: any }) => {
  return (
    <>
      <div className={styles.centerLayout}>
        <Navigation />
        <div className={styles.mainColumn}>{children}</div>
      </div>
      <PlatformWebGL />
    </>
  );
};

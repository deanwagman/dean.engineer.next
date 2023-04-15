import { Navigation } from "../components/Nav";

import PlatformWebGL from "../components/PlatformWebGL";

import styles from "./styles/layouts.module.css";

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

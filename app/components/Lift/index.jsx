import dynamic from "next/dynamic";

const Router = dynamic(() => import("./Router"), { ssr: false });

const Container = () => {
  return <Router />;
};

export default Container;

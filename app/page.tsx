import { redirect } from "next/navigation";
import { Navigation } from "./components/Nav";

export default () => {
  redirect("/about");
};

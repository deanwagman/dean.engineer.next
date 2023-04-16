import { redirect } from "next/navigation";
import { Navigation } from "./components/Nav";

const Page = () => {
  redirect("/about");
};

export default Page;

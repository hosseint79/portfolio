import { About } from "~/components/About/About";
import { Layout } from "~/components/Layout/Layout";

export default function Index() {
  return (
    <Layout>
      <About />
      <div className="h-[1700px] w-full bg-red-500"></div>
    </Layout>
  );
}

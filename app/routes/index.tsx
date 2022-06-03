import { About } from "~/components/About/About";
import { Footer } from "~/components/Footer/Footer";
import { Layout } from "~/components/Layout/Layout";

export default function Index() {
  return (
    <Layout>
      <About />
      <div className="h-[1700px] w-full bg-[#0A192F]">
        <Footer />
      </div>
    </Layout>
  );
}

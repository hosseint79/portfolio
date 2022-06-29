import { About } from "~/components/About/About";
import { ContactMe } from "~/components/ContactMe/ContactMe";
import { Footer } from "~/components/Footer/Footer";
import { Layout } from "~/components/Layout/Layout";
import {Skills} from "~/components/Skills/Skills";

export default function Index() {
  return (
    <Layout>
      <div id="home">
        <About />
        
        <div className=" w-full bg-[#110f1c] border border-transparent ">
        <Skills />
        <ContactMe />
        <Footer />
        </div>
      </div>
    </Layout>
  );
}

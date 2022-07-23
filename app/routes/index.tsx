import { lazy, ReactNode, Suspense, useEffect, useState } from "react";


import { About } from "~/components/About/About";
  import { ToastContainer } from 'react-toastify';


import { ContactMe } from "~/components/ContactMe/ContactMe";
import { Footer } from "~/components/Footer/Footer";
import { Layout } from "~/components/Layout/Layout";
import {Skills} from "~/components/Skills/Skills";



let TdCarousel = lazy(() => import("~/components/Carousel/Carousel"));


export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : null;
}

export default function Index() {
  return (
    <Layout>
 
      <div id="home">
        <ToastContainer
          autoClose={3000}
          newestOnTop
          closeOnClick
          rtl={true}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        <About />
        
        <div className=" w-full bg-[#110f1c] border border-transparent ">
          <Skills />
          <ContactMe />
         
         <ClientOnly>
            <Suspense fallback="">
              <TdCarousel />
            </Suspense>
          </ClientOnly>
         
             
          <Footer /> 
        </div>
      </div>
    </Layout>
  );
}


import { lazy, ReactNode, Suspense, useEffect, useState } from "react";

import { About } from "~/components/About/About";

import { ContactMe } from "~/components/ContactMe/ContactMe";
import { Footer } from "~/components/Footer/Footer";
import { Layout } from "~/components/Layout/Layout";
import {Skills} from "~/components/Skills/Skills";



let Example = lazy(() => import("~/components/Carousel/Carousel"));


export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : null;
}

export default function Index() {
  return (

         
            <ClientOnly>
            <Suspense fallback="">
              <Example />
            </Suspense>
          </ClientOnly>
          
             
   
  );
}

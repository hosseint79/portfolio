import { ActionFunction } from "@remix-run/node";
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

export const action: ActionFunction = async ({ request }) => {
  var nodemailer = require('nodemailer');
  const formData = await request.formData();

  const name = formData.get("name");
  const number = formData.get("number");
  const message = formData.get("message");


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hossein.w7979@gmail.com',
      pass: 'cyeomvysedmehejy'
    }
  });

  var mailOptions = {
    from: 'hossein.w7979@gmail.com',
    to: 'h.t.a7979@gmail.com',
    subject: "portfolio",
    text: name + "---" + number + message,
  };

  transporter.sendMail(mailOptions,function(error:any, info:any){
    if (error) {
      return {status:"error"};
    } 
    else {
      return {status:"success"};
    }
  });

  return {status:"success"};
}
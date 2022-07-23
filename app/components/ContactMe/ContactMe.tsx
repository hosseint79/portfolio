import { AiOutlineMail } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";
import { useEffect } from "react";
import Button from "../common/Button/Button";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { toast } from "react-toastify";
import { FiPhone } from "react-icons/fi";
import { ContactMeItem } from "./CopiedNotification/ContactMeItem";

function ContactMe() {

  const actionData = useActionData();
  const transition = useTransition();

  useEffect(() => {
    if (actionData?.status === "success") {
      toast("🚀 Your message sent successfuly ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [actionData]);


  return (
    <div id="contact">
      <Container>
        <SectionHeader title="Contact Me" caption="Get in touch" />
        <div className=" grid gap-6 py-8 grid-cols-5  md:px-12 lg:px-16">
          <div className="md:col-span-2 col-span-5 flex flex-col">
            
            <ContactMeItem icon={<FiPhone size={30} className="mx-4 text-indigo-600" />} title="Call Me" text="09397233907"/>
            <ContactMeItem icon={ <AiOutlineMail
                style={{ fontSize: "30px" }}
                className="mx-4 text-indigo-600"
              />} title="Email" text=" hossein.w7979@gmail.com"/>
            <ContactMeItem icon={ <TiLocation size={33} className="mx-4 text-indigo-600" />} title="Location" text="Iran - Sari"/>
           
   
          </div>
          <Form method="post" className="lg:col-span-3 col-span-5">
            <div>
              <div className="flex">
                <div className="w-full md:w-1/2 px-3 ">
                  <label
                    className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    className="appearance-none block w-full bg-[#211D35] text-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#312d42c8] border-[#211D35] border-2 focus:border-[#443d6c]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Phone Number
                  </label>
                  <input
                    name="number"
                    className="appearance-none block w-full bg-[#211D35] text-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#312d42c8] border-[#211D35] border-2 focus:border-[#443d6c]"
                    id="grid-last-name"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="w-full px-3 mt-5">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="h-52 appearance-none block w-full bg-[#211D35] text-gray-400 rounded p-3 px-4 leading-tight focus:outline-none focus:bg-[#312d42c8] border-[#211D35] border-2 focus:border-[#443d6c]"
                  id="grid-last-name"
                  placeholder="Message"
                />
              </div>
              <div className="flex justify-end px-3 mt-5">
                <Button
                  text="Send Message"
                  isLoading={transition.state === "loading"}
                />
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export { ContactMe };

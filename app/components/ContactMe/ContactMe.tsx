import { AiOutlineMail } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
import { Container } from '../common/Container/Container'
import { SectionHeader } from '../common/SectionHeader/SectionHeader'
import { useEffect } from 'react'
import Button from '../common/Button/Button'
import { Form, useActionData, useTransition } from '@remix-run/react'
import { toast } from 'react-toastify'
import { FiPhone } from 'react-icons/fi'
import { ContactMeItem } from './CopiedNotification/ContactMeItem'

function ContactMe() {
  const actionData = useActionData()
  const transition = useTransition()

  useEffect(() => {
    if (actionData?.status === 'success') {
      toast('🚀 Your message sent successfuly ', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [actionData])

  return (
    <div id="contact">
      <Container>
        <SectionHeader title="Contact Me" caption="Get in touch" />
        <div className=" grid grid-cols-5 gap-6 py-8  md:px-12 lg:px-16">
          <div className="col-span-5 flex flex-col md:col-span-2">
            <ContactMeItem
              icon={<FiPhone size={30} className="mx-4 text-indigo-600" />}
              title="Call Me"
              text="09397233907"
            />
            <ContactMeItem
              icon={
                <AiOutlineMail
                  style={{
                    fontSize: '30px',
                  }}
                  className="mx-4 text-indigo-600"
                />
              }
              title="Email"
              text=" hossein.w7979@gmail.com"
            />
            <ContactMeItem
              icon={<TiLocation size={33} className="mx-4 text-indigo-600" />}
              title="Location"
              text="Iran - Sari"
            />
          </div>
          <Form method="post" className="col-span-5 lg:col-span-3">
            <div>
              <div className="flex">
                <div className="w-full px-3 md:w-1/2 ">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400"
                    htmlFor="grid-last-name"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    className="block w-full appearance-none rounded border-2 border-[#211D35] bg-[#211D35] py-3 px-4 leading-tight text-gray-400 focus:border-[#443d6c] focus:bg-[#312d42c8] focus:outline-none"
                    id="grid-last-name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400"
                    htmlFor="grid-last-name"
                  >
                    Phone Number
                  </label>
                  <input
                    name="number"
                    className="block w-full appearance-none rounded border-2 border-[#211D35] bg-[#211D35] py-3 px-4 leading-tight text-gray-400 focus:border-[#443d6c] focus:bg-[#312d42c8] focus:outline-none"
                    id="grid-last-name"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="mt-5 w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400"
                  htmlFor="grid-last-name"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="block h-52 w-full appearance-none rounded border-2 border-[#211D35] bg-[#211D35] p-3 px-4 leading-tight text-gray-400 focus:border-[#443d6c] focus:bg-[#312d42c8] focus:outline-none"
                  id="grid-last-name"
                  placeholder="Message"
                />
              </div>
              <div className="mt-5 flex justify-end px-3">
                <Button
                  text="Send Message"
                  isLoading={transition.state === 'loading'}
                />
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export { ContactMe }

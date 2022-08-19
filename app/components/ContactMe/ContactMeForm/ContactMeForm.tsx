import { Form, useActionData, useTransition } from '@remix-run/react'
import Button from '~/components/common/Button/Button'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

function ContactMeForm() {
  const actionData = useActionData()
  const transition = useTransition()

  useEffect(() => {
    if (actionData?.status === 'error') {
      toast.error('All feilds are Required ! ', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    if (actionData?.status === 'success') {
      toast('🚀 Your message sent successfuly ', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [actionData])

  return (
    <Form method="post" className="col-span-5 lg:col-span-3">
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
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
          <div className="mt-5 lg:ml-5 lg:mt-0 lg:w-1/2">
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
        <div className="mt-5 w-full">
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
        <div className="mt-5 flex justify-end">
          <Button
            text="Send Message"
            isLoading={transition.state === 'loading'}
          />
        </div>
      </div>
    </Form>
  )
}

export { ContactMeForm }

import Button from '~/components/common/Button/Button'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import useAxios from 'utils/postMessage'

function ContactMeForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    message: '',
  })

  const handleOnChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { response, loading, error, sendData } = useAxios({
    method: 'post',
    data: {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    },
    headers: {
      accept: '*/*',
    },
  })

  useEffect(() => {
    if (response?.status === 201) {
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
  }, [response])

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (formData.name && formData.phoneNumber && formData.message) {
          sendData()
        } else {
          toast.error('✍🏻 All fields are required!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            // rtl: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }

        setFormData({ name: '', phoneNumber: '', message: '' })
      }}
      className="col-span-5 lg:col-span-3"
    >
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
              value={formData.name}
              className="block w-full appearance-none rounded border-2 border-[#211D35] bg-[#211D35] py-3 px-4 leading-tight text-gray-400 focus:border-[#443d6c] focus:bg-[#312d42c8] focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Name"
              onChange={handleOnChange}
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
              name="phoneNumber"
              value={formData.phoneNumber}
              className="block w-full appearance-none rounded border-2 border-[#211D35] bg-[#211D35] py-3 px-4 leading-tight text-gray-400 focus:border-[#443d6c] focus:bg-[#312d42c8] focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Phone Number"
              onChange={handleOnChange}
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
            value={formData.message}
            className="block h-52 w-full appearance-none rounded border-2 border-[#211D35] bg-[#211D35] p-3 px-4 leading-tight text-gray-400 focus:border-[#443d6c] focus:bg-[#312d42c8] focus:outline-none"
            id="grid-last-name"
            placeholder="Message"
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-5 flex justify-end">
          <Button text="Send Message" isLoading={loading} />
        </div>
      </div>
    </form>
  )
}

export { ContactMeForm }

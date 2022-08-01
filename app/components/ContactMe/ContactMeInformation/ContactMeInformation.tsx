import { AiOutlineMail } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
import { FiPhone } from 'react-icons/fi'
import { ContactMeItem } from './ContactMeItem/ContactMeItem'

function ContactMeInformation() {
  return (
    <div className="col-span-5 flex flex-col lg:col-span-2">
      <ContactMeItem
        icon={<FiPhone size={30} className="mr-4 text-indigo-600" />}
        title="Call Me"
        text="09397233907"
      />
      <ContactMeItem
        icon={
          <AiOutlineMail
            style={{
              fontSize: '30px',
            }}
            className="mr-4 text-indigo-600"
          />
        }
        title="Email"
        text=" hossein.w7979@gmail.com"
      />
      <ContactMeItem
        icon={<TiLocation size={33} className="mr-4 text-indigo-600" />}
        title="Location"
        text="Iran - Sari"
      />
    </div>
  )
}

export { ContactMeInformation }
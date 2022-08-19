import { AiOutlineMail } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
import { FiPhone } from 'react-icons/fi'
import { ContactMeItem } from './ContactMeItem/ContactMeItem'
import { homePageData } from '~/lib/data/home-page.data'

function ContactMeInformation() {
  return (
    <div className="col-span-5 flex flex-col items-center lg:col-span-2 lg:items-start">
      <ContactMeItem
        icon={<FiPhone size={30} className="text-indigo-600 lg:mr-4" />}
        title="Call Me"
        text={homePageData.contactInfo.phoneNumber}
      />
      <ContactMeItem
        icon={
          <AiOutlineMail
            style={{
              fontSize: '30px',
            }}
            className="text-indigo-600 lg:mr-4"
          />
        }
        title="Email"
        text={homePageData.contactInfo.email}
      />
      <ContactMeItem
        icon={<TiLocation size={33} className="text-indigo-600 lg:mr-4" />}
        title="Location"
        text={homePageData.contactInfo.location}
      />
    </div>
  )
}

export { ContactMeInformation }

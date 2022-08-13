import { ContactMe } from '~/components/ContactMe/ContactMe'
import { PostsList } from '~/components/PostsList/PostsList'
import { ClientOnly } from '~/lib/utilities/ClientOnly'
import { Layout } from '~/components/Layout/Layout/Layout'
import { Skills } from '~/components/Skills/Skills'
import { About } from '~/components/About/About'
import { ActionFunction } from '@remix-run/node'
import { ToastContainer } from 'react-toastify'
import { lazy, Suspense } from 'react'
import { Footer } from '~/components/Layout/Layout/Footer/Footer'

let TdCarousel = lazy(() => import('~/components/Carousel/Carousel'))

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

        <div className=" w-full border border-transparent bg-[#110f1c] ">
          <Skills />
          <ContactMe />

          <ClientOnly>
            <Suspense fallback="">
              <TdCarousel />
            </Suspense>
          </ClientOnly>
          <PostsList />

          <Footer />
        </div>
      </div>
    </Layout>
  )
}

// send email must refactor later
export const action: ActionFunction = async ({ request }) => {
  var nodemailer = require('nodemailer')
  const formData = await request.formData()

  const name = formData.get('name')
  const number = formData.get('number')
  const message = formData.get('message')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hossein.w7979@gmail.com',
      pass: 'cyeomvysedmehejy',
    },
  })

  var mailOptions = {
    from: 'hossein.w7979@gmail.com',
    to: 'h.t.a7979@gmail.com',
    subject: 'portfolio',
    text: name + '---' + number + message,
  }

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      return { status: 'error' }
    } else {
      return { status: 'success' }
    }
  })

  return { status: 'success' }
}

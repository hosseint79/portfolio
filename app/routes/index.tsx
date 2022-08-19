import { Footer } from '~/components/Layout/Layout/Footer/Footer'
import { ContactMe } from '~/components/ContactMe/ContactMe'
import { PostsList } from '~/components/PostsList/PostsList'
import { Layout } from '~/components/Layout/Layout/Layout'
import { ClientOnly } from '~/lib/utilities/ClientOnly'
import { Skills } from '~/components/Skills/Skills'
import { About } from '~/components/About/About'
import { ActionFunction } from '@remix-run/node'
import { lazy, Suspense } from 'react'

let TdCarousel = lazy(() => import('~/components/Carousel/Carousel'))

export default function Index() {
  return (
    <Layout>
      <div id="home">
        <About />
        <div className="w-full border border-transparent bg-[#110f1c] ">
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

  if (!name || !number || !message) {
    return { status: 'error' }
  }

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

  transporter.sendMail(mailOptions, function (error: any) {
    if (error) {
      return { status: 'error' }
    } else {
      return { status: 'success' }
    }
  })

  return { status: 'success' }
}

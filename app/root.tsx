import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styles from './styles/app.css'
import globalstyles from './styles/global.css'
import toaststyles from 'react-toastify/dist/ReactToastify.css'
import highlight from 'highlight.js/styles/base16/harmonic16-dark.css'
import LazyLoad from 'react-lazy-load-image-component/src/effects/black-and-white.css'

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: highlight },
    { rel: 'stylesheet', href: globalstyles },
    { rel: 'stylesheet', href: LazyLoad },
    {
      rel: 'stylesheet',
      href: toaststyles,
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Hossein',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

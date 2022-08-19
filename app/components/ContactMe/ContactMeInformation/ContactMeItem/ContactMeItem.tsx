import React, { FC, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FiCheckSquare, FiPhone } from 'react-icons/fi'

interface IProps {
  icon: React.ReactNode
  title: string
  text: string
}

const ContactMeItem: FC<IProps> = ({ icon, text, title }) => {
  const [copyDuration, setCopyDuration] = useState(false)
  return (
    <div className="mb-6 flex flex-col items-center justify-center text-center text-white lg:mb-0 lg:flex-row lg:text-left">
      {icon}
      <div className="my-2">
        <h5 className="mb-[2px] text-lg font-bold">{title} </h5>
        <CopyToClipboard
          text={text}
          onCopy={() => {
            if (!copyDuration) {
              setCopyDuration(true)
              setTimeout(() => {
                setCopyDuration(false)
              }, 2000)
            }
          }}
        >
          <h6 className="flex cursor-pointer flex-col flex-nowrap items-center lg:flex-row lg:gap-3">
            {text}
            <span className="h-9">
              {copyDuration && (
                <span className=" flex flex-col text-[#3dc66b] ">
                  <div className="flex items-center">
                    {/* {text !== 'hossein.w7979@gmail.com' ? (
                      <FiCheckSquare color="#3dc66b" className="mr-1" />
                    ) : (
                      ''
                    )} */}

                    <span>Copied!</span>
                  </div>

                  <span
                    className={`mt-1 h-[2px] w-0 bg-emerald-700 ${
                      copyDuration ? 'animate-copiedAnimation' : ''
                    }`}
                  />
                </span>
              )}
            </span>
          </h6>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export { ContactMeItem }

import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FiCheckSquare, FiPhone } from "react-icons/fi";

const ContactMeItem = () => {
    const [copyDuration,setCopyDuration] = useState(false)
    return (
            <div className="flex items-center text-white mb-6">
              <FiPhone size={30} className="mx-4 text-indigo-600" />
               <div className="my-2">
                <h5 className="font-bold text-lg mb-[2px]">Call Me</h5>
                <CopyToClipboard
                  text="09397233907"
                  onCopy={() => {
                    setCopyDuration(true)
                    setTimeout(() => {
                      setCopyDuration(false)
                    },2000)
                  }}
                >
                  <h6 className="flex items-center cursor-pointer">
                    09397233907
                    <span className="ml-2 h-9">
                      {copyDuration && (
                        <span className="text-[#3dc66b] flex flex-col ml-3 ">
                          <div className="flex items-center">
                            <FiCheckSquare
                            color="#3dc66b"
                            className="mr-3"
                            />
                            <span>Copied!</span>
                          </div>

                          <span className={`h-[2px] mt-1 w-0 bg-emerald-700 ${copyDuration ? "animate-copiedAnimation" : ""}`}/>
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
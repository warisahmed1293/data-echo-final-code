"use client";
import useHubspotForm from "@/hooks/hubspot";
import { useState } from "react";

function DemoSection() {
  const { submitContactForm } = useHubspotForm();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setters = {
      fullName: setFullName,
      email: setEmail,
      message: setMessage,
    };

    const setter = setters[name];
    if (setter) {
      setter(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitContactForm(email, fullName, message);
    if (response) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setEmail("");
        setFullName("");
        setMessage("");
      }, 3000);
    }

    console.log("response", response);
  };

  return (
    <div className="w-full pb-10 bg-gray-200">
      <div className="relative max-w-3xl px-10 pt-20 mx-auto bg-gray-200 lg:max-w-7xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative ">
            <div className="max-w-lg mx-auto lg:max-w-none ">
              <div className="relative ">
                <div>
                  <div className="flex items-center gap-2 pb-5">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33334 12.6666L14.7766 16.4769C15.2174 16.7855 15.4378 16.9397 15.6775 16.9995C15.8893 17.0523 16.1107 17.0523 16.3225 16.9995C16.5622 16.9397 16.7826 16.7855 17.2234 16.4769L22.6667 12.6666M12.5333 21.3333H19.4667C20.5868 21.3333 21.1468 21.3333 21.5747 21.1153C21.951 20.9236 22.2569 20.6176 22.4487 20.2413C22.6667 19.8134 22.6667 19.2534 22.6667 18.1333V13.8666C22.6667 12.7465 22.6667 12.1865 22.4487 11.7586C22.2569 11.3823 21.951 11.0764 21.5747 10.8846C21.1468 10.6666 20.5868 10.6666 19.4667 10.6666H12.5333C11.4132 10.6666 10.8532 10.6666 10.4254 10.8846C10.049 11.0764 9.74308 11.3823 9.55133 11.7586C9.33334 12.1865 9.33334 12.7465 9.33334 13.8666V18.1333C9.33334 19.2534 9.33334 19.8134 9.55133 20.2413C9.74308 20.6176 10.049 20.9236 10.4254 21.1153C10.8532 21.3333 11.4132 21.3333 12.5333 21.3333Z"
                        stroke="#000000"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width={31}
                        height={31}
                        rx="15.5"
                        stroke="#000000"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">Request A Demo</span>
                  </div>
                  <div className="w-4/5 ">
                    <h2 className="text-5xl leading-tight font-semibold -tracking-[0.02rem] text-gray-700 pb-5">
                      Request A Demo
                    </h2>
                    <div className="text-xl text-gray-700">
                      <p className="text-xl text-gray-700">
                        Want to get a demo? We’d love to hear from you. To
                        receive more information, or talk to us about how we can
                        help you, please provide us with your contact details.
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-12">
                      <div className="flex flex-col gap-4 pb-6 xl:items-center xl:flex-row">
                        <div className="w-full">
                          <div className="flex flex-col gap-1.5 w-full">
                            <label
                              htmlFor="fullName"
                              className="text-sm font-medium text-gray-700"
                            >
                              Full Name
                            </label>
                            <input
                              id="fullName"
                              name="fullName"
                              value={fullName}
                              placeholder="Full Name"
                              className="px-3.5 py-2.5 text-black bg-white border border-gray-200 rounded-lg ouline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base "
                              defaultValue=""
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full pb-6">
                        <div className="flex flex-col gap-1.5 w-full">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="px-3.5 py-2.5 bg-white text-black border border-gray-200 rounded-lg ouline-none focus:outline-blue-500 placeholder:text-gray-400 placeholder:text-base "
                            defaultValue=""
                            value={email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 w-full pb-6">
                        <label
                          htmlFor="Message"
                          className="text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="Message"
                          rows={5}
                          value={message}
                          onChange={handleChange}
                          placeholder="Leave us a message ..."
                          className="px-3.5 py-3 resize-none text-black bg-white border border-gray-200 rounded-lg ouline-none focus:outline-none placeholder:text-gray-400 placeholder:text-base"
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                    {showSuccess && (
                      <p className="px-1 py-2 text-green-700">
                        Form submitted Successfully!
                      </p>
                    )}
                    <button className="w-full px-5 py-3 text-base font-semibold text-center text-white rounded-lg shadow-xs cursor-pointer bg-[#0E6CAC]">
                      Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-4 mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <img
              className="relative h-full mx-auto overflow-hidden rounded-lg"
              src="demo.png"
              alt="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;

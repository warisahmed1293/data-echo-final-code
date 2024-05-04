import Logo from "@/components/svgs/logo";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/data-echo1/",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          {...props}
        >
          <path
            d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
            fill="#98A2B3"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:info@dataecho.org",
      icon: (props) => (
        <svg
          data-v-e087307f=""
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          {...props}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width={20} height={16} x={2} y={4} rx={2} />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 " id="footer">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col items-center pt-16 mb-16">
          <div>
            <a className="" href="/">
              <Logo />
            </a>
          </div>
          <div className="max-w-3xl mt-2 text-center">
            <span className="font-normal text-base leading-[18px] text-gray-600">
              Hear it Speak
            </span>
          </div>
        </div>
        <div className="pt-8 pb-12 border-t border-gray-400 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-base text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base leading-5 text-gray-500 md:order-1 md:mt-0">
            © 2024 DataEcho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

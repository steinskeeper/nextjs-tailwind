import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link href="/">
              <a className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none font-inter tracking-wider">
                Wheels24R
              </a>
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-black"
              >
                About
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Appointment
              </a>
              <Link href="/about">
                <a

                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Gallery
                </a>
              </Link>
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <Link href="/contact-us">
              <a
                href="#"
                className="inline-flex items-center justify-center px-2 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-red-400 border border-transparent rounded-md shadow-sm hover:bg-blue-400"
              >
                Contact Us
              </a>
            </Link>
          </div>


        </div>
      </section>
      <section class="text-gray-700 body-font bg-gray-400 mx-48 my-20 rounded-xl shadow-xl">
        <div class="container mx-auto flex p-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-6xl font-inter text-4xl mb-4 font-medium text-gray-900">We are Wheels24R

            </h1>
            <p class="mb-8 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600/edf2f7/a5afbd" />
          </div>
        </div>
      </section>
      <div class="flex h-screen justify-center items-center">
        <div class="text-center">
          <h1 class="text-3xl">NextJS</h1>
          <p class="text-xl">Tailwind</p>
        </div>
      </div>
    </>
  )
}

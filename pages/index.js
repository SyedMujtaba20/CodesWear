import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeswear.com - Wear the code</title>
        <meta name="description" content="CodesWear.com - Wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/logo.png"} />
      </Head>
      <div>
        <img src="/home.jpg" alt="" />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Wear the Code with Codeswear.com
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Wear whatever you want? What do you want? You want code? so why
              not wear the code??
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <img
                    src="data:image/png;base64,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"
                    alt="T-shirts"
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  T-Shirts
                </h2>
                <p className="leading-relaxed text-base">
                  Discover our range of premium t-shirts featuring cool coding
                  designs. Wear the code, show the style.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="data:image/png;base64,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"
                    alt="Hoodies"
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Hoodies
                </h2>
                <p className="leading-relaxed text-base">
                  Stay warm and stylish with our comfortable hoodies. Perfect
                  for coders on the go.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzf3wfgkpgV8L2J4PY7rpdCP-KxWGmlT3znQ&s"
                    alt="Mugs"
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Mugs
                </h2>
                <p className="leading-relaxed text-base">
                  Start your day with a cup of code! Explore our collection of
                  coding-themed mugs.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 justify-center items-center justify-center ">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpIY3TF_X1COTQ-IO1rTPGpQGFqjxE_JbWQ&s"
                    alt="Stickers"
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Stickers
                </h2>
                <p className="leading-relaxed text-base">
                  Add some personality to your gear with our fun and unique
                  coding stickers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

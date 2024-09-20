import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Product from "@/models/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "next/error";

const Slug = ({ addToCart, product, variants, buyNow, error }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    if (!error) {
      setSize(product.size);
      setColor(product.color);
    }
  }, [router.query]);
  useEffect(() => {
    if (color && !variants[color][size]) {
      // If the current size isn't available for the selected color, pick the first available size
      setSize(Object.keys(variants[color])[0]);
    }
  }, [color, size]);
  const checkServiceability = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinJson = await pins.json();
    // if (Object.keys(pinJson).includes(pin)) {
    if (pin && Object.keys(pinJson).includes(pin) && pinJson[pin]) {
      setService(true);
      toast.success("Your Pincode is serviceable! ", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: true,
      });
    } else {
      setService(false);
      toast.error("Sorry, Pincode not serviceable! ", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: true,
      });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const refreshVariant = (newcolor, newsize) => {
    if (variants[newcolor] && variants[newcolor][newsize]) {
      let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]["slug"]}`;
      router.push(url);
    }
  };

  if (error == 404) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-screen">
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 px-24 w-full lg:h-auto h-64 object-cover object-top rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size}/{product.color})
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>

                  {Object.keys(variants).map(
                    (variantColor) =>
                      variants[variantColor][size] && (
                        <button
                          key={variantColor}
                          onClick={() => refreshVariant(variantColor, size)}
                          className={`border-2 ml-1 rounded-full w-6 h-6 focus:outline-none ${
                            color === variantColor
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                          style={{
                            backgroundColor: variantColor.toLowerCase(),
                          }}
                        ></button>
                      )
                  )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(color, e.target.value);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    >
                      {color &&
                        variants[
                          color.charAt(0).toUpperCase() + color.slice(1)
                        ] &&
                        Object.keys(
                          variants[
                            color.charAt(0).toUpperCase() + color.slice(1)
                          ]
                        ).map((availableSize) => (
                          <option key={availableSize} value={availableSize}>
                            {availableSize}
                          </option>
                        ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                {product.availableQty > 0 && (
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rs. {product.price}
                  </span>
                )}
                {product.availableQty <= 0 && (
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Out Of Stock!
                  </span>
                )}
                <button
                  disabled={product.availableQty <= 0}
                  onClick={() => {
                    buyNow(slug, 1, product.price, product.title, size, color);
                  }}
                  className="flex ml-8 text-white disabled:bg-pink-300 bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      product.price,
                      product.title,
                      size,
                      color
                    );
                  }}
                  disabled={product.availableQty <= 0}
                  className="flex ml-4 text-white  disabled:bg-pink-300 bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  onChange={onChangePin}
                  className="px-2 border-2 border-gray-400 rounded-md"
                  type="text"
                  placeholder="Enter your Pincode"
                />
                <button
                  className=" text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                  onClick={checkServiceability}
                >
                  Check
                </button>
              </div>
              {service === false && (
                <div className="text-red-700 mt-3 text-sm">
                  Sorry! We do not deliver to this pincode yet.
                </div>
              )}
              {service && service !== null && (
                <div className="text-green-700 mt-3 text-sm">
                  Yay! This pincode is serviceable.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  if (product == null) {
    return {
      props: {
        error: 404,
      },
    };
  }
  let variants = await Product.find({
    title: product.title,
    category: product.category,
  });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }
  return {
    props: {
      error: error,
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}

export default Slug;

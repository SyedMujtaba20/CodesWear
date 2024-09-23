import React, { useState, useEffect } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ cart, clearCart, subTotal, addToCart, removeFromCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({ value: null });

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fetchData(myuser.token);
    }
  }, []);

  useEffect(() => {
    if (
      name.length > 3 &&
      email.length > 3 &&
      phone.length > 3 &&
      address.length > 3 &&
      pincode.length > 3
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, phone, address, pincode]);

  const fetchData = async (token) => {
    let data = { token: token };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    setName(res.name);
    setAddress(res.address);
    setPincode(res.pincode);
    setPhone(res.phone);
    getPincode(res.pincode);
  };

  const getPincode = async (pin) => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinJson = await pins.json();
    if (Object.keys(pinJson).includes(pin)) {
      setState(pinJson[pin][1]);
      setCity(pinJson[pin][0]);
    } else {
      setState("");
      setCity("");
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "pincode" && value.length === 5) {
      getPincode(value);
    }

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "pincode":
        setPincode(value);
        break;
      default:
        break;
    }
  };

  const initiatePayment = async () => {
    let oid = Math.floor(Math.random() * Date.now());

    const data = {
      cart,
      subTotal,
      oid,
      email: email,
      name,
      address,
      pincode,
      phone,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let txnRes = await a.json();
    if (txnRes.success) {
      let txnToken = txnRes.txnToken;
      //Config
      var config = {
        root: "",
        flow: "DEFAULT",
        hidePaymodeLabel: true,
        data: {
          orderId: oid,
          amount: subTotal,
          token: txnToken,
          tokenType: "TXN_TOKEN",
        },
        handler: {
          notifyMerchant: function (eventType, data) {},
        },
      };

      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.error("Payment error", error);
        });
    } else {
      if (txnRes.cartClear) {
        clearCart();
      }

      toast.error(txnRes.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="container px-2 max-w-3xl sm:m-auto min-h-screen">
      <ToastContainer />
      <Head>
        <title>Checkout - Codeswear.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        type="application/javascript"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
      />
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>

      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            {user && user.token ? (
              <input
                value={user.email}
                type="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors readOnly"
                readOnly
              />
            ) : (
              <input
                onChange={handleChange}
                value={email}
                type="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors"
              />
            )}
          </div>
        </div>
      </div>

      {/* Additional form fields for address, phone, pincode, etc. */}

      <div className="mx-4">
        <button
          disabled={disabled}
          onClick={initiatePayment}
          className="disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
        >
          <BsFillBagCheckFill className="m-1" /> Pay Rs.{subTotal}
        </button>
      </div>
    </div>
  );
};

export default Checkout;

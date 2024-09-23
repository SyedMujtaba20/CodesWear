import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const [progress, setProgress] = useState(0);
  const router = useRouter(); // useEffect(() => { //   router.events.on("routeChangeStart", () => setProgress(40)); //   router.events.on("routeChangeComplete", () => setProgress(100)); //   try { //     if (localStorage.getItem("cart")) { //       setCart(JSON.parse(localStorage.getItem("cart"))); //       saveCart(JSON.parse(localStorage.getItem("cart"))); //     } //   } catch (error) { //     localStorage.clear(); //   } //   const myuser = JSON.parse(localStorage.getItem("myuser")); //   if (myuser) { //     setUser({ value: myuser.token, email: myuser.email }); //   } //   setKey(Math.random()); // }, [router.query]);
  useEffect(() => {
    const handleRouteChangeStart = () => setProgress(40);
    const handleRouteChangeComplete = () => setProgress(100);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete); // Cleanup event listeners

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        setCart(storedCart);
        saveCart(storedCart);
      }
    } catch (error) {
      localStorage.clear();
    }

    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser) {
      setUser({ value: myuser.token, email: myuser.email });
    }

    setKey(Math.random());
  }, []); // This effect runs only once when the component mounts

  const logout = () => {
    localStorage.removeItem("myuser");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    if (Object.keys(cart).length == 0) {
      setKey(Math.random());
    }
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);

    saveCart(newCart);
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    newCart[itemCode] = { qty: 1, price, name, size, variant };

    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <>
      <LoadingBar
        color="#ff2d55"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
           {" "}
      {key && (
        <Navbar
          Logout={logout}
          user={user}
          key={key}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
        />
      )}
      <Component
        buyNow={buyNow}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

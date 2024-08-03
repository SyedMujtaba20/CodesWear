import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: JSON.parse(localStorage.getItem("myuser").token),
        }),
      });
      let res = await a.json();
      setOrders(res.orders);
    };
    if (!localStorage.getItem("myuser")) {
      router.push("/");
    } else {
      fetchOrders();
    }
  }, []);
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div class="relative overflow-x-auto">
          <h1 className="font-semibold text-center p-8 text-2xl">My Orders</h1>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                      <tr>
                        <th scope="col" class="px-6 py-4">
                          #Order Id
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Email
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Amount
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((item) => {
                        return (
                          <tr
                            key={item._id}
                            class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                          >
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              {item.orderId}
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              {item.email}
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              {item.amount}
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <Link href={"/order?id=" + item._id}>
                                Details
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

import React from "react";
import Link from "next/link";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Return Policy
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          At Codeswear, we want you to be completely satisfied with your
          purchase. If you&apos;re not happy with the product, we&apos;re here
          to help with returns and exchanges.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Return Conditions
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Items can be returned within 30 days of the delivery date.</li>
          <li>
            Products must be unused, undamaged, and in their original packaging.
          </li>
          <li>Receipt or proof of purchase is required for returns.</li>
          <li>Personalized or custom items cannot be returned or exchanged.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How to Initiate a Return
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          To initiate a return, please contact our customer service team at{" "}
          <Link
            href="mailto:codeswear@gmail.com"
            className="text-blue-500 underline"
          >
            codewear@gmail.com
          </Link>
          . Make sure to include your order number and the reason for the
          return.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refunds</h2>
        <p className="text-lg text-gray-600 mb-6">
          Once we receive your returned item, we will inspect it and notify you
          on the status of your refund. If approved, your refund will be
          processed to the original method of payment within 7-10 business days.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exchanges</h2>
        <p className="text-lg text-gray-600 mb-6">
          If you need to exchange an item for a different size or color, please
          contact us with your request, and we will guide you through the
          exchange process.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Shipping Costs
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Shipping costs for returns are the responsibility of the customer
          unless the return is due to a defect or mistake on our part.
        </p>

        <p className="text-lg text-gray-600 mb-6">
          If you have any further questions about our return policy, please
          don&apos;t hesitate to reach out to us at{" "}
          <Link
            href="mailto:codeswear@gmail.com"
            className="text-blue-500 underline"
          >
            codeswear@gmail.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;

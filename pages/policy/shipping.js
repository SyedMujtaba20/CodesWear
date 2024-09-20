import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Shipping Policy
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          At Codeswear, we are committed to providing you with the best shipping
          experience. Please take a moment to review our shipping policies
          below.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Processing Time
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Orders are typically processed within 1-3 business days (excluding
          weekends and holidays) after you receive your order confirmation
          email. You will receive another notification when your order has
          shipped.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Domestic Shipping Rates and Estimates
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Shipping charges for your order will be calculated and displayed at
          checkout. We offer various shipping methods to meet your needs.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Standard Shipping (5-7 business days)</li>
          <li>Express Shipping (2-3 business days)</li>
          <li>Overnight Shipping (1 business day)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          International Shipping
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We currently offer international shipping to select countries.
          Shipping charges will be calculated at checkout based on your location
          and shipping method. Please note that international shipments may be
          subject to customs fees and import duties, which are the
          responsibility of the customer.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How Do I Check My Order Status?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          When your order has shipped, you will receive an email notification
          from us, which will include a tracking number you can use to check its
          status. Please allow 48 hours for the tracking information to become
          available.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Shipping to P.O. Boxes
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Please note that we cannot ship to P.O. boxes. Make sure to provide a
          full physical address for delivery.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Missing or Lost Packages
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          If your package is lost or missing, please contact us at{" "}
          <a
            href="mailto:codeswear@gmail.com"
            className="text-blue-500 underline"
          >
            codeswear@gmail.com
          </a>{" "}
          with your order number. We will do our best to assist you in tracking
          down your shipment.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Refunds for Shipping Costs
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Shipping costs are non-refundable unless the error is on our part
          (such as wrong item shipped or defective product).
        </p>

        <p className="text-lg text-gray-600 mb-6">
          For any further questions regarding shipping, feel free to contact us
          at{" "}
          <a
            href="mailto:codeswear@gmail.com"
            className="text-blue-500 underline"
          >
            codeswear@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;

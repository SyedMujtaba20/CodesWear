import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          At Codeswear, we value your privacy and are committed to protecting
          your personal data. This privacy policy explains how we collect, use,
          and share your information when you visit or make a purchase from our
          website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Information We Collect
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We collect various types of personal information, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>
            Your name, shipping address, billing address, email address, and
            phone number
          </li>
          <li>Payment information (including credit card numbers)</li>
          <li>Order details and purchase history</li>
          <li>
            Technical information such as IP address, browser type, and
            operating system
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Process and fulfill your orders</li>
          <li>
            Communicate with you about your order, account, or any inquiries
          </li>
          <li>Improve our website and enhance user experience</li>
          <li>Send you marketing communications, if you have opted in</li>
          <li>Prevent fraud and ensure the security of our website</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sharing Your Information
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We may share your personal information with third parties in the
          following cases:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>
            To service providers and partners who help us operate our website
            and process payments
          </li>
          <li>To comply with legal obligations or protect our legal rights</li>
          <li>
            In connection with a business transfer, such as a merger or
            acquisition
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Rights
        </h2>
        <p className="text-lg text-gray-600 mb-6">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to any inaccurate data</li>
          <li>
            Request the deletion of your personal data (subject to certain legal
            restrictions)
          </li>
          <li>Opt-out of marketing communications at any time</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Data Security
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We take the security of your personal information seriously and use
          reasonable measures to protect it from unauthorized access,
          disclosure, alteration, and destruction. However, please note that no
          method of transmission over the internet or electronic storage is
          completely secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
        <p className="text-lg text-gray-600 mb-6">
          We use cookies and similar tracking technologies to improve your
          experience on our website, analyze traffic, and personalize content.
          You can control the use of cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Changes to This Policy
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We may update this privacy policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons. We encourage you to review this page regularly for the latest
          information on our privacy practices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          If you have any questions about this privacy policy or the personal
          data we hold about you, please contact us at{" "}
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

export default PrivacyPolicy;

import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Terms of Service
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Welcome to Codeswear. By accessing or using our website, you agree to
          be bound by the following terms and conditions. Please read these
          terms carefully before using our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          By using our website, you accept these Terms of Service in full. If
          you disagree with any part of these terms, you must not use our
          website or services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. Modifications to the Terms
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We reserve the right to modify these terms at any time. Any changes
          will be effective immediately upon posting on the website. Continued
          use of the website after changes constitutes your acceptance of the
          new terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. Use of Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          You agree to use our services only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else&apos;s use and enjoyment of the website. Prohibited behavior
          includes harassing or causing distress or inconvenience to any person
          and transmitting obscene or offensive content.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          4. User Accounts
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          To access certain features of our website, you may be required to
          create an account. You agree to provide accurate, current, and
          complete information. You are responsible for maintaining the
          confidentiality of your account and password.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Payment Terms
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          All payments made through our website are subject to the terms
          outlined at the point of sale. Prices and availability of products are
          subject to change without notice. We reserve the right to refuse any
          order you place with us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          6. Shipping and Returns
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our shipping and returns policy is detailed separately and is
          incorporated into these Terms of Service. Please review our{" "}
          <a href="/policy/shipping" className="text-blue-500 underline">
            Shipping Policy
          </a>{" "}
          and{" "}
          <a href="/policy/return" className="text-blue-500 underline">
            Return Policy
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          7. Intellectual Property
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          All content, trademarks, logos, and other intellectual property
          displayed on this website are the property of Codeswear or our
          partners. You are not permitted to use any of our intellectual
          property without our prior written consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          8. Limitation of Liability
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We are not liable for any indirect, incidental, or consequential
          damages arising out of or in connection with your use of our website
          or services. Our liability is limited to the fullest extent permitted
          by law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          9. Termination
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We may terminate or suspend access to our services at any time,
          without prior notice or liability, for any reason whatsoever,
          including if you breach these terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          10. Governing Law
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          These terms shall be governed and construed in accordance with the
          laws of Pakistan, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          11. Contact Information
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          If you have any questions or concerns regarding these Terms of
          Service, please contact us at{" "}
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

export default TermsOfService;

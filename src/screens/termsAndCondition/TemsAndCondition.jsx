import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = React.useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setAccepted(true);
    navigate(-1);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to Bisine! These terms and conditions outline the rules and
        regulations for the use of Bisine's Website, located at www.bisine.com.
      </p>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Bisine if you do not agree to take
        all of the terms and conditions stated on this page.
      </p>
      <p className="mb-4">
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance, and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of India. Any use of the above terminology or
        other words in the singular, plural, capitalization and/or he/she or
        they, are taken as interchangeable and therefore as referring to same.
      </p>
      <p className="mb-4">
        Cookies We employ the use of cookies. By accessing Bisine, you agreed to
        use cookies in agreement with the Bisine's Privacy Policy.
      </p>
      <p className="mb-4">
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </p>
      <p className="mb-4">
        License Unless otherwise stated, Bisine and/or its licensors own the
        intellectual property rights for all material on Bisine. All
        intellectual property rights are reserved. You may access this from
        Bisine for your own personal use subjected to restrictions set in these
        terms and conditions.
      </p>
      <p className="mb-4">
        You must not:
        <ul className="list-disc list-inside">
          <li>Republish material from Bisine</li>
          <li>Sell, rent or sub-license material from Bisine</li>
          <li>Reproduce, duplicate or copy material from Bisine</li>
          <li>Redistribute content from Bisine</li>
        </ul>
      </p>
      <p className="mb-4">This Agreement shall begin on the date hereof.</p>
      <p className="mb-4">
        Restrictions You are specifically restricted from all of the following:
      </p>
      <ul className="list-disc list-inside">
        <li>Publishing any website material in any other media;</li>
        <li>
          Selling, sublicensing and/or otherwise commercializing any website
          material;
        </li>
        <li>Publicly performing and/or showing any website material;</li>
        <li>
          Using this website in any way that is or may be damaging to this
          website;
        </li>
        <li>
          Using this website in any way that impacts user access to this
          website;
        </li>
        <li>
          Using this website contrary to applicable laws and regulations, or in
          any way may cause harm to the website, or to any person or business
          entity;
        </li>
        <li>
          Engaging in any data mining, data harvesting, data extracting or any
          other similar activity in relation to this website;
        </li>
        <li>Using this website to engage in any advertising or marketing.</li>
      </ul>
      <p className="mb-4">
        Your Content In these Website Standard Terms and Conditions, "Your
        Content" shall mean any audio, video text, images or other material you
        choose to display on this Website. By displaying Your Content, you grant
        Bisine a non-exclusive, worldwide irrevocable, sub licensable license to
        use, reproduce, adapt, publish, translate and distribute it in any and
        all media.
      </p>
      <p className="mb-4">
        Your Content must be your own and must not be invading any third-party’s
        rights. Bisine reserves the right to remove any of Your Content from
        this Website at any time without notice.
      </p>
      <p className="mb-4">
        No warranties This Website is provided "as is," with all faults, and
        Bisine express no representations or warranties, of any kind related to
        this Website or the materials contained on this Website. Also, nothing
        contained on this Website shall be interpreted as advising you.
      </p>
      <p className="mb-4">
        Limitation of liability In no event shall Bisine, nor any of its
        officers, directors and employees, shall be held liable for anything
        arising out of or in any way connected with your use of this website
        whether such liability is under contract. Bisine, including its
        officers, directors and employees shall not be held liable for any
        indirect, consequential or special liability arising out of or in any
        way related to your use of this Website.
      </p>
      <p className="mb-4">
        Indemnification You hereby indemnify to the fullest extent Bisine from
        and against any and/or all liabilities, costs, demands, causes of
        action, damages and expenses arising in any way related to your breach
        of any of the provisions of these Terms.
      </p>
      <p className="mb-4">
        Severability If any provision of these Terms is found to be invalid
        under any applicable law, such provisions shall be deleted without
        affecting the remaining provisions herein.
      </p>
      <p className="mb-4">
        Variation of Terms Bisine is permitted to revise these Terms at any time
        as it sees fit, and by using this Website you are expected to review
        these Terms on a regular basis.
      </p>
      <p className="mb-4">
        Assignment The Bisine is allowed to assign, transfer, and subcontract
        its rights and/or obligations under these Terms without any
        notification. However, you are not allowed to assign, transfer, or
        subcontract any of your rights and/or obligations under these Terms.
      </p>
      <p className="mb-4">
        Entire Agreement These Terms constitute the entire agreement between
        Bisine and you in relation to your use of this Website, and supersede
        all prior agreements and understandings.
      </p>
      <p className="mb-4">
        Governing Law & Jurisdiction These Terms will be governed by and
        interpreted in accordance with the laws of the State of India, and you
        submit to the non-exclusive jurisdiction of the state and federal courts
        located in India for the resolution of any disputes.
      </p>
      <p className="mb-4">
        Privacy Policy Please review our Privacy Policy, which explains how we
        use and protect your information.
      </p>
      <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
      <p className="mb-4">
        At Bisine, we take your privacy seriously. This Privacy Policy explains
        how we collect, use, and disclose your personal information when you use
        our website and services.
      </p>
      <p className="mb-4">
        Personal Information We Collect:
        <ul className="list-disc list-inside">
          <li>
            Contact information, such as name, email address, and phone number,
            when you create an account or contact us for support.
          </li>
          <li>
            Usage information, such as your IP address, browser type, device
            type, and operating system, when you visit our website.
          </li>
          <li>
            Order information, such as the products you purchase and the
            delivery address, when you make a purchase.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        How We Use Your Personal Information:
        <ul className="list-disc list-inside">
          <li>
            To provide and improve our services, such as processing your orders
            and responding to your inquiries.
          </li>
          <li>
            To communicate with you, such as sending you updates about your
            order or responding to your support requests.
          </li>
          <li>
            To personalize your experience, such as showing you products that
            are relevant to your interests.
          </li>
          <li>
            To comply with legal obligations, such as responding to subpoenas or
            other legal requests.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        How We Share Your Personal Information:
        <ul className="list-disc list-inside">
          <li>
            With service providers, such as payment processors and shipping
            providers, who help us provide our services.
          </li>
          <li>
            With business partners, such as suppliers and manufacturers, who
            help us operate our business.
          </li>
          <li>
            With law enforcement or regulatory authorities, such as when
            required by law or to protect our rights.
          </li>
          <li>
            With your consent, such as when you authorize us to share your
            information with a third party.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        Cookies and Other Tracking Technologies:
        <ul className="list-disc list-inside">
          <li>
            We use cookies and other tracking technologies to personalize your
            experience, analyze website traffic, and improve our services.
          </li>
          <li>
            You can manage your cookie preferences through your browser settings
            or by contacting us for assistance.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        Data Retention:
        <ul className="list-disc list-inside">
          <li>
            We retain your personal information for as long as necessary to
            provide our services, comply with legal obligations, and resolve
            disputes.
          </li>
          <li>
            We may delete or anonymize your personal information when it is no
            longer necessary for these purposes.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        Security:
        <ul className="list-disc list-inside">
          <li>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
          </li>
          <li>
            However, no method of transmission over the internet or electronic
            storage is completely secure, so we cannot guarantee its absolute
            security.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        Your Rights:
        <ul className="list-disc list-inside">
          <li>
            You have certain rights with respect to your personal information,
            such as the right to access, correct, or delete it.
          </li>
          <li>
            You can exercise these rights by contacting us for assistance.
          </li>
        </ul>
      </p>
      <p className="mb-4">
        Changes to this Privacy Policy:
        <ul className="list-disc list-inside">
          <li>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements.
          </li>
          <li>
            We will notify you of any material changes by posting the new
            Privacy Policy on our website and updating the "Last Updated" date
            at the 24 April 2024.
          </li>
        </ul>
      </p>
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-4">
          Refunds and Cancellations Policy
        </h2>

        <p class="mb-4">
          <strong>Order Cancellation</strong>
          <br />
          Customers can place orders on our website. However, the seller
          reserves the right to update the delivery cost before the payment is
          made. Once the payment has been made by the customer, the order cannot
          be cancelled. However, the customer can cancel the order before
          payment, either after noting the delivery charge.
        </p>

        <p class="mb-4">
          <strong>Refund Policy</strong>
          <br />
          If the ordered package is not delivered by the seller as promised even
          after 10 working days, the customer can request a refund. The refund
          will be provided to the customer after proper investigation.
        </p>

        <p class="mb-4">
          <strong>Return Policy</strong>
          <br />
          We do not accept returns unless the product is damaged or defective.
          If the product is damaged or defective, the customer must contact us
          within 7 days of receiving the product to initiate a return. The
          customer will be responsible for shipping the product back to seller
          at their own cost. Once seller receive the product and confirm that it
          is damaged or defective, we will process the refund.
        </p>

        <p class="mb-4">
          <strong>Exchanges</strong>
          <br />
          We do not offer exchanges. If a customer wants to exchange a product,
          they must return the original product and place a new order for the
          desired product.
        </p>
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-4">Buyer Pricing Information</h2>
          <p class="mb-4">
            At Bisine, we believe in empowering our sellers to set their own
            prices for their products. This means that the pricing of every
            product is assigned by the seller, ensuring that they have the
            flexibility to offer competitive and attractive prices to our
            customers.
          </p>
          <p class="mb-4">
            Our platform supports a wide range of pricing strategies, from fixed
            prices to dynamic pricing based on various factors such as demand,
            inventory levels, and competition. Sellers can also offer discounts
            and promotions to attract more customers and increase sales.
          </p>
          <p class="mb-4">
            To help our customers make informed purchasing decisions, we provide
            detailed product information, including pricing, features, and
            specifications. We also offer a user-friendly interface that allows
            customers to easily compare products and prices, and make purchases
            with just a few clicks.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            Seller Pricing Information
          </h2>
          <p class="mb-4">
            For sellers, setting up a shop on our platform costs Rs 500 per month,
            and we charge a 5% commission on sales.
          </p>
        </div>
      </div>
      <h1 class="text-2xl font-bold mb-4">Shipping Policy</h1>

<p class="mb-4">
  At Bisine, we understand that timely delivery is crucial for a positive shopping experience. That's why we allow sellers to choose their own delivery partners and set their own delivery times.
</p>

<p class="mb-4">
  The seller is completely responsible for delivery. They have the capability to deliver within 2 days to max 15 days of delivery depending upon the delivery partner they choose, distance and other factors.
</p>

<p class="mb-4">
  Sellers are expected to deliver products within the time frame they have specified. However, unavoidable factors like climate can be accepted for delay in delivery.
</p>

<p class="mb-4">
  If the delivery is delayed beyond the specified time frame, the seller may offer a refund or replacement at their discretion.
</p>

<p class="mb-4">
  If the delivery is not received within a reasonable time frame, the buyer should contact the seller to resolve the issue.
</p>

<p class="mb-4">
  Bisine is not responsible for delays in delivery caused by the seller, delivery partner, or unavoidable factors.
</p>

<p class="mb-4">
  If the delivery is returned to the seller due to incorrect or incomplete address information provided by the buyer, the buyer may be responsible for additional shipping fees.
</p>

<p class="mb-4">
  Bisine reserves the right to modify this policy at any time.
</p>

<p class="mb-4">
  For more information about shipping, please contact our customer service team.
</p>




      <p className="mb-4 text-xl font-semibold">
        Contact Us:
        <ul className="list-disc list-inside">
          <li>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at contactbisine@gmail.com. or call us with
            +919566875400
          </li>
        </ul>
      </p>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          accepted ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleAccept}
        disabled={accepted}
      >
        I Accept
      </button>
    </div>
  );
};

export default TermsAndConditions;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = React.useState(false);
  const navigate = useNavigate()

  const handleAccept = () => {
    setAccepted(true);
    navigate(-1);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to Bisine! These terms and conditions outline the rules and regulations for the use of Bisine's Website, located at www.bisine.com.
      </p>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Bisine if you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <p className="mb-4">
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
      </p>
      <p className="mb-4">
        Cookies
        We employ the use of cookies. By accessing Bisine, you agreed to use cookies in agreement with the Bisine's Privacy Policy.
      </p>
      <p className="mb-4">
        Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
      </p>
      <p className="mb-4">
        License
        Unless otherwise stated, Bisine and/or its licensors own the intellectual property rights for all material on Bisine. All intellectual property rights are reserved. You may access this from Bisine for your own personal use subjected to restrictions set in these terms and conditions.
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
      <p className="mb-4">
        This Agreement shall begin on the date hereof.
      </p>
      <p className="mb-4">
        Restrictions
        You are specifically restricted from all of the following:
      </p>
      <ul className="list-disc list-inside">
        <li>Publishing any website material in any other media;</li>
        <li>Selling, sublicensing and/or otherwise commercializing any website material;</li>
        <li>Publicly performing and/or showing any website material;</li>
        <li>Using this website in any way that is or may be damaging to this website;</li>
        <li>Using this website in any way that impacts user access to this website;</li>
        <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;</li>
        <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website;</li>
        <li>Using this website to engage in any advertising or marketing.</li>
      </ul>
      <p className="mb-4">
        Your Content
        In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Bisine a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
      </p>
      <p className="mb-4">
        Your Content must be your own and must not be invading any third-party’s rights. Bisine reserves the right to remove any of Your Content from this Website at any time without notice.
      </p>
      <p className="mb-4">
        No warranties
        This Website is provided "as is," with all faults, and Bisine express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
      </p>
      <p className="mb-4">
        Limitation of liability
        In no event shall Bisine, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Bisine, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
      </p>
      <p className="mb-4">
        Indemnification
        You hereby indemnify to the fullest extent Bisine from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
      </p>
      <p className="mb-4">
        Severability
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
      </p>
      <p className="mb-4">
        Variation of Terms
        Bisine is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
      </p>
      <p className="mb-4">
        Assignment
        The Bisine is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
      </p>
      <p className="mb-4">
        Entire Agreement
        These Terms constitute the entire agreement between Bisine and you in relation to your use of this Website, and supersede all prior agreements and understandings.
      </p>
      <p className="mb-4">
        Governing Law & Jurisdiction
        These Terms will be governed by and interpreted in accordance with the laws of the State of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
      </p>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${accepted ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleAccept}
        disabled={accepted}
      >
        I Accept
      </button>
    </div>
  );
};

export default TermsAndConditions;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContactNumber, setEmailID, setSocialMediaLink } from '../../../redux/features/shop'

const ContactInfo = ({partNo}) => {
  const dispatch = useDispatch()
  const contactNumber = useSelector(e => e.shop.contactNumber)
  const emailID = useSelector(e => e.shop.emailID)
  const socialMediaLink = useSelector(e=> e.shop.socialMediaLink);

  const contactNumberError = useSelector(e => e.shopError.contactNumberError)
  const emailIDError = useSelector(e => e.shopError.emailIDError)
  const socialMediaLinkError = useSelector(e => e.shopError.socialMediaLinkError)
  return (
    <div className={`${partNo == 4 ? 'flex' : 'hidden'} text-black flex-col gap-4`}>
      <h1 className="font-semibold text-xl">Contact Info</h1>
      <div>
        <label className="text-md font-semibold block">Contact Number</label>
        <input
          value={contactNumber}
          onChange={(e) => dispatch(setContactNumber(e.target.value))}
          type='number'
          placeholder="Enter your 10 digit number"
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-md ${contactNumberError!='' ? 'border-red-500' : 'border-gray-500'}`}
        />
        <p className="text-red-500 text-xs">{contactNumberError}</p>
      </div>
      <div>
        <label className="text-md font-semibold block">Email ID (Business Mail)</label>
        <input
          value={emailID}
          onChange={(e) => dispatch(setEmailID(e.target.value))}
          placeholder="Enter your email ID"
          type='email'
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-md ${emailIDError!='' ? 'border-red-500' : 'border-gray-500'}`}
        />
        <p className="text-red-500 text-xs">{emailIDError}</p>
      </div>
      <div>
        <label className="text-md font-semibold block">Social Media Link (Optional)</label>
        <input
          value={socialMediaLink}
          onChange={(e) => dispatch(setSocialMediaLink(e.target.value))}
          placeholder="Enter any of social media profile"
          type='text'
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-md ${socialMediaLinkError!='' ? 'border-red-500' : 'border-gray-500'}`}
        />
        <p className="text-red-500 text-xs">{socialMediaLinkError}</p>
      </div>
    </div>
  )
}

export default ContactInfo
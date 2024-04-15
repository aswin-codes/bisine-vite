import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBanner, setLogo } from "../../../redux/features/shop";
import axios from "axios";

const InfoGraphics = ({ partNo }) => {
  //Secret keys for Cloudinary
  const preset_key = "bisineimages" ;
  const cloudname = "ddkpclbs2";


  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(null);
  const [shopBanner, setShopBanner] = useState(null);

  //State variables for loading state
  const [isLogoUploaded, setIsLogoUploaded] = useState(null)
  const [isBannerUploaded, setIsBannerUploaded] = useState(null)

  const uploadImage = (stateFunc, file, loadStateFunc) => {
    loadStateFunc(false)
    const formData = new FormData()
    formData.append("file",file)
    formData.append("upload_preset",preset_key)
    axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,formData)
    .then(res => dispatch(stateFunc(res.data.secure_url))).then(r => loadStateFunc(true))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    //dispatch(setLogo(profileImage))
    uploadImage(setLogo,profileImage,setIsLogoUploaded)
  },[profileImage])
  useEffect(()=>{
    //dispatch(setBanner(shopBanner))
    uploadImage(setBanner,shopBanner,setIsBannerUploaded)
  },[shopBanner])

  const handleImageChange = (e , stateFunc) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        stateFunc(imageDataUrl);
      };

      reader.readAsDataURL(selectedImage);
    }
  };
  return (
    <div
      className={`${
        partNo == 3 ? "flex" : "hidden"
      } text-black flex-col gap-4 w-60 md:w-auto md:max-w-md `}
    >
      <h1 className="font-semibold text-xl mb-2">Infographics</h1>
      <div>
        <h1 className="font-semibold text-lg ">Shop Logo</h1>
        <p className="text-xs">
          A shop logo is a small, iconic representation of your brand or shop.
          It's the visual symbol that customers will associate with your
          business
        </p>
        <div className="flex w-full justify-center items-center flex-col text-sm mt-2">
          {profileImage ? (
            <div className="flex items-center gap-2">
            <img
              src={profileImage}
              alt="Selected Avatar"
              className="w-20 h-20 rounded-full"
            />
            { isLogoUploaded ? <p>Successfully Uploaded</p> : <p>Uploading...</p>}
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e,setProfileImage)}
            className="mt-3 "
          />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg mt-2">Shop Banner (Optional)</h1>
        <p className="text-xs">
          A shop banner is a larger, more prominent image that often appears at
          the top of your shop's homepage. It serves as a visually appealing
          introduction to your shop.
        </p>
        <div className="flex w-full justify-center items-center flex-col text-sm mt-2">
        {shopBanner ? (
          <div className="flex items-center gap-2">
            <img
              src={shopBanner}
              alt="Selected Avatar"
              className="w-20 h-10 "
            />
           { isLogoUploaded ? <p>Successfully Uploaded</p> : <p>Uploading...</p>}
            </div>
          ) : (
            <div className="w-48 h-16  bg-gray-200 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e,setShopBanner)}
            className="mt-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default InfoGraphics;

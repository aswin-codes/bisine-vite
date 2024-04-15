import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function TagInput({ bgWhite , setData}) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const shopTagsError = useSelector((e) => e.shopError.shopTagsError);

  useEffect(() => {
    dispatch(setData(tags));
  }, [tags]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    
    if (tags.includes(inputValue.trim())) {
      setInputValue("");
    }
    if (
      e.key === "Enter" &&
      inputValue.trim() !== "" &&
      !tags.includes(inputValue.trim())
    ) {
      // Add the tag to the tags array
      setTags([...tags, inputValue.trim()]);
      // Clear the input field
      setInputValue("");
    }
  };

  const handleTagRemove = (tag) => {
    // Remove the tag from the tags array
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div className="">
      <div
        className={`flex border-2 px-1  rounded-md  ${
          bgWhite ? "w-full " : " w-60  md:w-72 lg:w-96"
        } py-1 ${shopTagsError != "" ? "border-red-500" : "border-gray-500"}`}
      >
        <div className=" flex flex-wrap  gap-1 ">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white px-2 py-1 text-md h-fit rounded-full flex  items-center"
            >
              {tag}
              <button
                className="ml-2 text-sm text-white hover:bg-red-500 rounded-full "
                onClick={() => handleTagRemove(tag)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="Add tags..."
            className={` focus:outline-none focus:ring-0 ${
              bgWhite ? "bg-white" : "bg-blue-50"
            }  max-w-full text-md px-2`}
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      </div>
      <p className="text-red-500 text-xs">{shopTagsError}</p>
    </div>
  );
}

export default TagInput;

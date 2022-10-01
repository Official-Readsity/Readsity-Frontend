import React from 'react'

const AuthorsCard = (props) => {
  return (
    <div
      className="bg-white shadow-custom m-5 w-4/5 flex flex-col border-solid 
      md:w-2/5 md:h-4/5 md:max-w-sm 
    "
    >
      <img
        src={props.author_image}
        alt="author"
        className=" h-1/4 "
      />
      <div className="border-dark-purple p-5 border border-t-0 text-left font-bold md:p-4 h-48 lg:p-6  ">
        <h2 className="text-2xl pb-3 font-playfair md:pb-3 md:text-2xl lg:3xl lg:pb-2">
          {props.author_name}
        </h2>
        <p className="text-m text-343333 pb-4 h-16 font-lora md:pb-6 md:h-20 lg:pb-3 lg:h-16 ">
          {props.author_description}
        </p>
        <button className="px-4 py-2 bg-dark-purple rounded text-white font-bold font-lora">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default AuthorsCard
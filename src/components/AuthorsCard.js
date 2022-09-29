import React from 'react'

const AuthorsCard = (props) => {
  return (
    <div
      className="bg-white shadow-custom m-5 p-8  w-3/5 flex flex-col 
      md:w-2/5 md:h-4/5 md:max-w-sm m
    "
    >
      <img
        src={props.author_image}
        alt="author"
        className="bg-author-bg-color h-4/5  "
      />
      <div>
        <h2 className="card-title text-4xl pt-10"> {props.author_name}</h2>
      </div>
    </div>
  );
}

export default AuthorsCard
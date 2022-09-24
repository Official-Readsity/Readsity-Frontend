import React from 'react'

const AuthorsCard = (props) => {
  return (
    <div className="bg-white drop-shadow-xl m-5 p-8 w-2/5 flex flex-col">
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
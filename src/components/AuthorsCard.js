import React from 'react'

const AuthorsCard = (props) => {
  return (
    <div className="bg-white drop-shadow-md m-5 h-{579px} p-8 ">
      <img
        src={props.author_image}
        alt="author"
        className="bg-author-bg-color "
      />
      <div>
        <h2 className="card-title text-4xl pt-10"> {props.author_name}</h2>
      </div>
    </div>
  );
}

export default AuthorsCard
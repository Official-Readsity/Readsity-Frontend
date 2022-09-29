import React from 'react'
import AuthorsCard from './AuthorsCard';
import Chimamanda from "../assets/authors/Chimamanda-Ngozi-Adiche.png";
import Ted from "../assets/authors/Ted-Dekker.png";
import Chinua from "../assets/authors/Chinua-Achebe.png";

const Authors = (props) => {
  const authors = [
    {
      id: 1,
      author_name: "Chimamanda Ngozi Adiche",
      author_image: Chimamanda,
    },
    {
      id: 2,
      author_name: "Chinua Achebe",
      author_image: Chinua,
    },
    {
      id: 3,
      author_name: "Ted Dekker",
      author_image: Ted,
    },
  ];
   console.log(authors);
 
  return (
    <>
      <section>
        <section className="best-sellers-container text-center">
          <div>
            <p className=" text-dark-purple font-bold text-3xl p-5  md:text-5xl">
              BEST SELLING AUTHORS
            </p>
            <div className=" flex flex-col items-center md:flex-row">
              {/* flex justify-center */}
              {authors.map((author) => (
                <AuthorsCard
                  author_name={author.author_name}
                  author_image={author.author_image}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Authors
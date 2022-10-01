import React from 'react'
import AuthorsCard from './AuthorsCard';
import Chimamanda from "../assets/authors/author-1.png";
import Ted from "../assets/authors/author-3.png";
import Chinua from "../assets/authors/author-2.png";

const Authors = (props) => {
  const authors = [
    {
      id: 1,
      author_name: "Sofia Salmon",
      author_image: Chimamanda,
      author_description: "Specializes in fiction, fantasy and romance novels.",
    },
    {
      id: 2,
      author_name: "Grace hermin",
      author_image: Chinua,
      author_description: "Speclizes in UI/UX writing.",
    },
    {
      id: 3,
      author_name: "Isaac fisher",
      author_image: Ted,
      author_description: "Lover of anime and comics, Manga etc.",
    },
  ];
   console.log(authors);
 
  return (
    <>
      <section>
        <section className="best-sellers-container text-center">
          <div>
            <p className=" text-dark-purple font-bold text-3xl p-5 font-playfair  md:text-5xl">
              BEST SELLING AUTHORS
            </p>
            <div className=" flex flex-col items-center justify-center  md:flex-row">
              {authors.map((author) => (
                <AuthorsCard
                  author_name={author.author_name}
                  author_image={author.author_image}
                  author_description={author.author_description}
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
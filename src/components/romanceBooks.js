import React from 'react'
import "./categoriesBook.css";
import { Link } from "react-router-dom";
import Books from '../data/bookCard.json'



const romanceBooks = () => {
  return (
    <div>
        {/* <div></div>     This is for the side navbar */}
        <div className='right-container'>
            <div className='top-container'>
                <div>
                    <h1>ROMANCE</h1>
                </div>
                <div>
                    <ul>
                        <li>
                          <Link>RATING</Link>  
                        </li>
                        <li>
                            <Link>NEWEST</Link> 
                        </li>
                        <li>
                            <Link>AUTHOR</Link> 
                        </li>
                        <li>
                            <Link>TITLE</Link> 
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bottom-container'>
                {
                    Books.map(card => {
                        return(
                            <div key={card.id}>
                                {card.Romance && card.Romance.map(data => (
                                    <div key={data.id}>
                                        <div>
                                            <img src={data.bookImage} alt="different type of books" />
                                        </div>                                    
                                        <div>
                                            <p>{ data.bookTitle }</p>
                                            <p>{ data.bookAuthor }</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    })
                }
            </div>
        </div>
      
    </div>
  )
}

export default romanceBooks

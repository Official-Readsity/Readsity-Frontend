import React from "react";
import BooksIndividualPageNavBar from '../components/BooksIndividualPageNavBar'
import romanceBooks from "../components/romanceBooks";

function RomanceBooksPage() {
  return (
		<div>
			<BooksIndividualPageNavBar />
			<romanceBooks />
		</div>
	);
}

export default RomanceBooksPage;

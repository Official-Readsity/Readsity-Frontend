import React from 'react'
import "./Offer.css";
import offerImage from "../assets/images/HeroImages/offerImage.png";

const Offer = (props) => {
  return (
		<div className="section_two">
			<div className="offer_container ">
				<div className="offer_heading">
					<h2 className="offer_title">WHAT WE OFFER</h2>
				</div>

				<div className="offer_content">
					<div className="offer_left column">
						<img src={offerImage} alt="offerImage" />
					</div>

					<div className="offer_right column">
						<div className="offer_subheading">
							<p className="offer_subtitle">DIRECT-TO-CUSTOMER SALES</p>
						</div>

						<div className="offer_context">
							<p className="offer_text">
								At Readsity,our customers buy directly from the Authors without
								going through a third part members of wholesalers and
								retailkers.
							</p>
							<p className="offer_text">
								Customers have contol over pricing, costs as well as discounts.
								They get instant feedback.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Offer
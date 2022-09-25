import React from "react";
import "./Hero.css";
import PurpleButton from "../assets/PurpleButton";
import heroFirstImg from "../assets/images/HeroImages/HeroFirstImg.png";

const Hero = (props) => {
  return (
		<>
			<div className="section_one">
				<div className="overall_container">
					<div className="hero_container">
						<div>
							<div className="hero_paragraph">
								<div>
									<h1 className="hero_largetext">
										Books are no more threatened by the kindle than stairs by
										elevators
									</h1>
								</div>
								<div>
									<p className="hero_smalltext">
										Are you a book lover? looking for a platform to explore your
										imaginations? Then, Readsity is here for you. it provides
										all Book- related your needs.
									</p>
								</div>
								<div className="hero_button">
									<PurpleButton />
								</div>
							</div>
							<div className="hero_images">
								<img src={heroFirstImg} alt="heroImage" />
							</div>
            </div>
            
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

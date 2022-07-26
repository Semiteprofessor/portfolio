/** @format */

import React from "react";
import "./About.css";
import $ from "jquery";


$(document).ready(function () {
  
    $('.sidebar-menu').mouseenter(function(){
      $(this).children('.expand').addClass('turn');
    });
  
    $('.sidebar-menu').mouseleave(function(){
      if ($(this).hasClass('open')) {
      } else {
        $(this).children('.expand').removeClass('turn');
      }
    });
    
    $('.sidebar-menu').click(function () {
      var $this = $(this);
      if ($this.hasClass('open')) {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');        
        $this.removeClass('open');
        $this.children('.expand').removeClass('turn');
        $this.next().stop(true).slideUp("fast");
      }    
      else {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');
        
        $this.addClass('open');
        $this.children('.expand').addClass('turn');
        $this.next().stop(true).slideDown("fast");
        }
    });
  
});

const About = () => {
	return (
		<div className="about">
			<div className="container">
				{/* Left */}
				<div className="left">
					<img src={require("../assets/images/me.jpg")} alt="" />
					<span className="info">Personal Info</span>
					<span className="bar"></span>
					<span>NAME:</span>
					<p>Taiwo Olapade</p> <br />
					<span>E-MAIL:</span>
					<p>
						<b>semiteprofessor@gmail.com</b>
					</p>{" "}
					<br />
					<span>PHONE:</span>
					<p>
						<b>+(234) 806 9095 729</b>
					</p>{" "}
					<br />
					<span>WEBSITE:</span>
					<p>
						<b>taiwoolapade.dev</b>
					</p>
				</div>

				{/* Right */}
				<div className="right">
					<span className="name">Taiwo Olapade</span>
					<span className="bar"></span>
					<span className="talent">Talented JavaScript Developer</span>
					<blockquote>
						I am a hard-worker, qualified and professional Full Stack developer
						with good communication skill who work effectively in a team and
						have the ability to meet deadline. I have years of experience in
						both frontend and backend, database administration and website
						design. Strong creative and analytical skills. Team player with an
						eye for detail.{" "}
					</blockquote>

					<div class="sidebar-1">
						<div class="sidebar-menu">
							Churches & Religious Services<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>The Vineyard at Johnstown</li>
								<li>Hillcrest Church of Christ</li>
								<li>Church of the Nativity</li>
								<li>Lighthouse of Utica</li>
								<li>Utica Baptist Temple</li>
								<li>Utica Presbyterian Church</li>
								<li>Utica Church of Christ</li>
								<li>Utica Methodist Church</li>
								<li>Northside Church of Christ</li>
							</ul>
						</div>
						<div class="sidebar-menu">
							Civic Organizations<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>Clubs & Organizations</li>
								<li>Non-Profit</li>
								<li>Utica Sertoma</li>
								<li>Utica Shrine Club</li>
								<li>Resale Store/Non Profit</li>
							</ul>
						</div>
						<div class="sidebar-menu">
							Business & Professional Services<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>Water Conditioning</li>
								<li>Kennel</li>
								<li>Insurance</li>
								<li>Lender</li>
								<li>Electric & Natural Gas</li>
							</ul>
						</div>
						<div class="sidebar-menu">
							Art, Design, & Entertainment<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>Photographers</li>
								<li>Vinyl Graphics & Design</li>
								<li>Newspaper</li>
								<li>Web Development</li>
								<li>Computer Technology</li>
								<li>Bowling</li>
							</ul>
						</div>
						<div class="sidebar-menu">
							Health & Beauty<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>Barber Shop</li>
								<li>Beauty Salon</li>
								<li>Hair Flair Beauty</li>
								<li>Kim's Trims</li>
								<li>Patsy's Beauty Shop</li>
								<li>Chiropractic & Nutritional</li>
								<li>Pharmacies</li>
								<li>Veterinarians</li>
								<li>DVM-VMD Clinic</li>
								<li>Nursing Homes</li>
								<li>Tanning</li>
							</ul>
						</div>
						<div class="sidebar-menu">
							Food & Dining<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>Orchards & Farm Markets</li>
								<li>Branstool Orchard</li>
								<li>Legend Hill Orchard</li>
								<li>Farm Market</li>
								<li>Grocers-Retail</li>
								<li>Pizza</li>
								<li>Big Red's Pizza</li>
								<li>Nick's Village Pizza</li>
								<li>Stone Bros Pizza</li>
								<li>Ice Cream Manufacturers</li>
								<li>Restaurants</li>
								<li>Watts Restaurant</li>
								<li>Pioneer Restaurant</li>
							</ul>
						</div>
						<div class="sidebar-menu">
							Shopping<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>5+10 Store</li>
								<li>Custom Embroidery</li>
								<li>Got Gear 4 U</li>
								<li>Hickory Grove Designs</li>
								<li>Feed/Hardware</li>
								<li>Fireworks</li>
								<li>Outdoor Power Equipment</li>
								<li>Tree Farm</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

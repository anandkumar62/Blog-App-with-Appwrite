import React from "react";
import LOGO from "../Images/LOGO.jpg"

function Logo({ width = "80px" , height = "80px"}) {
  return (
    <div>
      <img className = "w-12 h-12 rounded-full"
        // src="https://images.pexels.com/photos/2740844/pexels-photo-2740844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        src={LOGO}
        alt="LOGO"
      />
    </div>
  );
}

export default Logo;

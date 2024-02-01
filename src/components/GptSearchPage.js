import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearchPage = () => {
 
  return (
    <div className="w-screen">
      <div className="fixed -z-10 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="img"
          className="h-screen w-screen object-cover bg-opacity-100"
        />
      </div>
      <GptSearchBar/>
     
      <GptSuggestions/>
     
      
      
    </div>
  ); 
};

export default GptSearchPage;

import React, { useState } from 'react';
import Apple from './Apple';
import Banana from './Banana';
import './Home.css';



const Home = (props) => {
    return(
      <div className = "Home">
        <h1>
            Welcome to The Bookcase!
        </h1>

        <Apple />

      <div className = "Under">
        <h1>
          The Legacy of The Bookcase:
        </h1>
        <p>
        "The story of our family business has been told through several generations. Starting back in late 40s my father's father, Grandpa GDoc, opened up our family's legacy, this bookstore, when he had kids he taught us, Uncle Travis and my dad, Kevin, how to run the family bookstore. Since Travis was older GDoc passed the legacy to him. When Travis got older he sold the business to my father, Kevin. Now as Kevin has also grown older he has passed the torch on to me. We have a time told tradition of serving our local community and now as the digital frontier has arrived we have decided to open yet another avenue of outreach to our local community. " 
        </p>
      </div>
      
      <Banana />

      </div>


        
     

    )

};

export default Home;
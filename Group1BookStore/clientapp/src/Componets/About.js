import React from 'react';
import './About.css';


function About(){

    return(
        <div className = 'About'>
           
           <div className = 'img'>
           <img className = 'i1' src= "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <img  className = 'i2' src=  "https://images.pexels.com/photos/176103/pexels-photo-176103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
           </div>
           
        <p>
        "The story of our family business has been told through several generations. Starting back in late 40s my father's father, Grandpa GDoc, opened up our family's legacy, this bookstore, when he had kids he taught us, Uncle Travis and my dad, Kevin, how to run the family bookstore. Since Travis was older GDoc passed the legacy to him. When Travis got older he sold the business to my father, Kevin. Now as Kevin has also grown older he has passed the torch on to me. We have a time told tradition of serving our local community and now as the digital frontier has arrived we have decided to open yet another avenue of outreach to our local community. " 
        </p>
        </div>
    )
}

export default About;
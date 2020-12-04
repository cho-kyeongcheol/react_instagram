import React, { useState,Component } from 'react';
import main1 from '../images/main11.jpg' 
import main2 from '../images/main22.jpg' 
import main3 from '../images/main33.jpg' 


  
const Second = () => {


    
    // showSlides(); 
    // let slideIndex = 0;
    // function showSlides() {
    //     let i;
    //     const slides = document.getElementsByClassName("mySlides")
    //     for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";  
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}    
       
    //     slides[slideIndex-1].style.display = "block";  
    //     setTimeout(showSlides, 2000); // Change image every 2 seconds
    // }




    return (
        <div>
            <h2>Second Page</h2>

            
            <div className="mySlides fade">
            <img src= {main1} /></div>

            <div className="mySlides fade">
            <img src= {main2}/></div>

            <div class="mySlides fade">
            <img src= {main3}/></div>
            <span>  dlwlrma</span>

            

            <button type="button" className="slide_btn_prev">Prev</button>
            <button type="button" className="slide_btn_next">Next</button>


            
            
        </div>
    )
}

export default Second;
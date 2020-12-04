import React from 'react';
import main from '../images/main1.jpg' // relative path to image 


  
const First = () => {    
      return (
        <div>
            
         <div className="modal">
            <h3>cho-kyeongcheol</h3>
            
            <img src= {main} className="mainImg"/>
            {/* <img src='../images/main1.jpg'></img> */}
            <p>상세내용</p>
         </div>

        </div>        
    )
}
    
  
  
export default First;
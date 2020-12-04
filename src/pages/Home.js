import React,{ useState } from 'react';
import main from '../images/main1.jpg' 
import profile from '../images/profile.jpg' 
import profile2 from '../images/RION.png' 
import profile3 from '../images/RION2.png' 
import profile4 from '../images/CAT.png' 
import profile5 from '../images/SIMSON.jpg' 
import profile6 from '../images/CAT2.jpg' 



const Home = () => {

    const [name, setName] = useState(['아이유입니다','React','nodejs']);

    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [number3, setNumber3] = useState(1);


    const onIncrease1 = () => {
        setNumber1(prevNumber => prevNumber + 1);
        }
    const onDecrease1 = () => {
       setNumber1(prevNumber => prevNumber - 1);
    }
    const onIncrease2 = () => {
        setNumber2(prevNumber => prevNumber + 1);
        }
    const onDecrease2 = () => {
       setNumber2(prevNumber => prevNumber - 1);
    }
    const onIncrease3 = () => {
        setNumber3(prevNumber => prevNumber + 1);
        }
    const onDecrease3 = () => {
       setNumber3(prevNumber => prevNumber - 1);
    }

    
    return (
        <div>
            <div className="story-profile">
                <img src= {profile3} className="profiles"/>
                <img src= {profile2} className="profiles"/>
                <img src= {profile} className="profiles"/>
                <img src= {profile4} className="profiles" />
                <img src= {profile5} className="profiles"/>
                <img src= {profile6} className="profiles"/>            
                <img src= {profile6} className="profiles"/>  
            </div>

            {/* <div className="story">
                <canvas id="stoCanvas" className="stoCanvas" width="50" height="50"/>
            </div> */}


            <div className="list">          
                
            <span>
            <img src= {profile} className="profile"/><span>  dlwlrma</span>
            <img src= {main} className="mainImg"/>
            👍 {number1} &nbsp; 
            <button onClick={onIncrease1}>+1</button>
            <button onClick={onDecrease1}>-1</button>
            <br/>{ name[0]}  </span>            
                <p>12월 3일</p> <hr />

                <span>
            <img src= {profile} className="profile"/><span>  dlwlrma</span>
            <img src= {main} className="mainImg"/>
            👍 {number2} &nbsp; 
            <button onClick={onIncrease2}>+1</button>
            <button onClick={onDecrease2}>-1</button>
            <br/>{ name[1]}  </span>            
                <p>12월 4일</p> <hr />

                <span>
            <img src= {profile} className="profile"/><span>  dlwlrma</span>
            <img src= {main} className="mainImg"/>
            👍 {number3} &nbsp; 
            <button onClick={onIncrease3}>+1</button>
            <button onClick={onDecrease3}>-1</button>
            <br/>{ name[2]}  </span>            
                <p>12월 5일</p> <hr />

               
                
            </div>
        </div>
    )
}

export default Home;
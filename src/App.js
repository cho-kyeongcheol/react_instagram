/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/layout/header/Header';



function App() {
  let [글제목, 글제목변경] = useState(['Javascript','React','nodejs']);
  let [좋아요, 좋아요변경] = useState(0);
  let posts = 'JAVA';

  function 제목바꾸기 (){
    var newArray = [...글제목];
    newArray[0] = 'Typescript'
    글제목변경( newArray );
  
  }


  return (
    <div className="App">      
      <Header />
      
 
    <button onClick={ 제목바꾸기 } >버튼</button>
    <div className="list">
      <h3>{ 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>👍</span></h3>
      <p>12월 3일</p>
      <hr/>
    </div>
    <div className="list">
      <h3>{ 글제목[1] }</h3>
      <p>12월 4일</p>
      <hr/>
    </div>
    <div className="list">
      <h3>{ 글제목[2] }</h3>
      <p>12월 5일</p>      
      <hr/>
    </div>
    <Model />
    <hr />

    <div className="modal">
      <h2>글 제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

    </div>
  );
}



function Model() {
  return(
  <>
  <h1>하하</h1>
  <h2>호호</h2>
  </>
  )
}

export default App;

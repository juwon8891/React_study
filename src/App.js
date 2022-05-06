/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목,setValue] = useState(['남자 코트 추천', '강남 우동 맛집','파이썬독학']);
  let styles = { color : 'orange', fontSize : '20px' };
  let date = '5월 6일 발행';
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
      <h4 style= { styles }>ReactBlog</h4>
      </div>
      <div>
      <div>
      <div className="list">
        <h4>{글제목} <span onClick={ ()=>{따봉변경(따봉++)}   }>좋아요😊</span> {따봉} </h4>
        <p>{date}</p>
        </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>{date}</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;

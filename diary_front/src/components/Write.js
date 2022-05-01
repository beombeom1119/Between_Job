import React, { useState } from 'react'
import axios from 'axios'
import { Button, InputGroup } from 'react-bootstrap'
import Camera from './images/camera.png'
import Header from './layouts/Header'



const Write = () => {
 
  const [Diary, setDiary] = useState({"id":1, "title":"","content":"","img":"","commit":false, "date":"","score":0})
  const [imageSrc, setImageSrc] = useState('');
  const [isUpload, setIsUpload] = useState(true);

  const createDiary = async () => {

  const data = {
    "title": Diary.title,
    "content": Diary.content,
    "img": Diary.img,
    "date": new Date(),
    "commit": false,
    "score": Diary.score
  }

  axios.post(`http://localhost:8080/add`,JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...'
    },
    data
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

const onChange = (e) => {
  const { name, value } = e.target;
  setDiary({
    ...Diary,
    [name]: value,
  });
}

const createDiaryForm = () => {
  if (window.confirm("일기를 추가하시겠습니까?") === true){    
    createDiary();
    window.location.href="/diary"
}else{   
    
}
}


const encodeFileToBase64 = (fileBlob) => {
  const reader = new FileReader();
  reader.readAsDataURL(fileBlob);
  return new Promise((resolve) => {
    reader.onload = () => {
      setImageSrc(reader.result);
      resolve();
    };
  });
};
  

  return (    
    <>
      <Header></Header>
      <form className='CreateForm'>
        <div className='CreateBox'>
        <h1>취준 일기 작성</h1>
        <div className="preview">
          {imageSrc && <img className='todayPhotoload' src={imageSrc} alt="preview-img"/>}
        </div>
        <div className="filebox"><label htmlFor="ex_file" >{ isUpload&&<img className="todayPhoto" src={Camera}/>}<p>오늘의 공부 사진</p></label> <input type="file" id="ex_file" style={{visibility:"hidden"}}
          onChange={(e) => { encodeFileToBase64(e.target.files[0]); setIsUpload(false) }} /> </div>
        {/* 사진 관련 */}
        </div>
        <div className='CreateBox'>
        <h2>오늘 제목</h2>
        <input id="inputGroup-sizing-sm"  name="title" value={Diary.title || ''} placeholder="당일 취준 제목" onChange={onChange}></input><br/>
        <h2>취준 내용</h2>
        <textarea id="content" name="content" value={Diary.content || ''} placeholder="당일 취준 내용" onChange={onChange}></textarea><br/>
        <div className='scoreDiv'><input id="score" name="score" value={Diary.score || ''} placeholder='오늘 하루는 몇점?' onChange={onChange}></input>점</div><br/><br/>
        <Button className="btnSave"onClick={() => {createDiaryForm();}} >쓰기</Button>
      </div>
      </form>
      </>
  )
}

export default Write
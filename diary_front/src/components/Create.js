import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Camera from './images/camera.png'



const Create = () => {
 
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
}else{   
    return false;
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
      <form className='CreateForm'>
        <h3>일기 작성</h3>  
      
        {/* 사진 관련 */}
        <div className="preview" style={{paddingLeft:"40px"}}>
          {imageSrc && <img id="preview_img" src={imageSrc} alt="preview-img" style={{ marginBottom: "20px", width: "60px", height: "60px", textAlign: "center" }} />}
        </div>
        <div className="filebox" style={{paddingLeft:"40px"}}> <label htmlFor="ex_file" >{ isUpload&&<img src={Camera} style={{width:"60px", height:"60px" ,backgroundColor:"#ffffff"}}/>}</label> <input type="file" id="ex_file" style={{visibility:"hidden"}}
          onChange={(e) => { encodeFileToBase64(e.target.files[0]); setIsUpload(false) }} /> </div>
        {/* 사진 관련 */}

        <input id="title" name="title" value={Diary.title || ''} placeholder="당일 취준 제목" onChange={onChange}></input><br/>
        <textarea id="content" name="content" value={Diary.content || ''} placeholder="당일 취준 내용" onChange={onChange}></textarea><br/>
        <input id="score" name="score" value={Diary.score || ''} placeholder='오늘 하루는 몇점?' onChange={onChange}></input> 점<br/><br/>
      </form>

      <div style={{ textAlign: "right", marginRight: "40px"}}>      
     <Button className="btnSave" onClick={() => {createDiaryForm(); window.location.href="/"}} >쓰기</Button>
      </div>
    </>

  )
}

export default Create
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Camera from './images/camera.png'
import Header from './layouts/Header'
import { useParams } from 'react-router-dom'



const Update = () => {

    let {id} = useParams();
    const [Diary, setDiary] = useState({ "id": id, "title": "", "content": "", "img": "", "commit": false, "date": "", "score": 0 })
    const [imageSrc, setImageSrc] = useState('');
    const [isUpload, setIsUpload] = useState(true);
    

    useEffect(() => {
      fetchData();
      console.log(id)
    }, [])
    

    const UpdateDiary = async () => {

        const data = {
          "title": Diary.title,
          "content": Diary.content,
          "img": Diary.img,
          "date": new Date(),
          "commit": false,
          "score": Diary.score
        }
      
        axios.put(`http://localhost:8080/update/${id}`,JSON.stringify(data), {
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

    const fetchData = async () => {
        const result = await axios(`http://localhost:8080/getid/${id}`);
        setDiary(result.data);
        console.log(result.data)
    };

        


    

    const onChange = (e) => {
        const { name, value } = e.target;
        setDiary({
            ...Diary,
            [name]: value,
        });
    }

    const updateDiaryForm = () => {
        if (window.confirm("일기를 수정하시겠습니까?") === true) {
            UpdateDiary();
            window.location.href = "/diary"
        } else {

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
                    <h1>취준 일기 수정</h1>
                    <div className="preview">
                        {imageSrc && <img className='todayPhotoload' src={imageSrc} alt="preview-img" />}
                    </div>
                    <div className="filebox"><label htmlFor="ex_file" >{isUpload && <img className="todayPhoto" alt="DiaryPhoto" src={Camera} />}<p>오늘의 공부 사진</p></label> <input type="file" id="ex_file" style={{ visibility: "hidden" }}
                        onChange={(e) => { encodeFileToBase64(e.target.files[0]); setIsUpload(false) }} /> </div>
                    {/* 사진 관련 */}
                </div>
                <div className='CreateBox'>
                    <h2>오늘 제목</h2>
                    <input id="inputGroup-sizing-sm" name="title" value={Diary.title || ''} placeholder="당일 취준 제목" onChange={onChange}></input><br />
                    <h2>취준 내용</h2>
                    <textarea id="content" name="content" value={Diary.content || ''} placeholder="당일 취준 내용" onChange={onChange}></textarea><br />
                    <div className='scoreDiv'><input id="score" name="score" value={Diary.score || ''} placeholder='오늘 하루는 몇점?' onChange={onChange}></input>점</div><br /><br />
                    <Button className="btnSave" onClick={() => { updateDiaryForm(); }} >수정</Button>
                </div>
            </form>
        </>
    )
}


export default Update;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Header from './layouts/Header'
import commit_O from './images/commit_O.png'
import commit_X from './images/commit_X.png'
import { Link } from 'react-router-dom';

const Diary = () => {

  const [Diarys, setDiarys] = useState([]);
  const [Id, setId] = useState(0)

  useEffect(() => {
    fetchData();
  }, [Id]);

  const fetchData = async () => {
    const result = await axios("http://localhost:8080/getall");
    setDiarys(result.data);
  };

   const commit= async (key) =>
  {
    await axios.put(`http://localhost:8080/update/commit/${key}`, {})
    console.log("score")
    fetchData()
  }

  const deleteDiary = async (key) =>
  {
    if (window.confirm("글을 삭제하시겠습니까?") === true) {
      await axios.delete(`http://localhost:8080/delete/${key}`, {})   
      window.location.href = "/diary"
  } else {

  }
      
  }
    
  return (
    <>
    <Header></Header>
    <div className='Container'>
    <Table className='diaryTable'>
      <tbody>
        <div className='diaryHeader'><h2>일기장</h2> <Link to="/write"><button>일기 쓰기</button></Link></div>

        
        {Diarys.map((DiaryList) => {
          return (
            <div className="diaryContainer" key={DiaryList.id}>
              <div><img style={{width:"15vw",height:"30vh",borderRadius:"30px", marginLeft:"10px"}} alt="DiaryImg" src={DiaryList.img}></img></div>
              <td>
              <h6 style={{marginLeft:"30px","marginBottom":"3px"}} >{DiaryList.date}</h6>
              <div className='t_title'>{DiaryList.title}</div>
              <div className='t_content'>{DiaryList.content}</div>
              </td>
              <div className='t_score'>{DiaryList.score}점</div>
              <td><button className="updateButton"><a href={'/update/'+DiaryList.id}>수정</a></button> <button className="deleteButton" onClick={()=> deleteDiary(DiaryList.id)}>삭제</button></td>
              
              {DiaryList.commit === true ? <td className='t_commit' onClick={()=>commit(DiaryList.id)}><img src={commit_O} alt="commit_O"></img></td> : <td className='t_commit' onClick={()=>commit(DiaryList.id)}><img src={commit_X} alt="commit_X"></img></td>}
              
              {/* <td>{playerList.goal} <button onClick={async () => score(playerList.number)}>+</button> <button onClick={async () => {  score_cancel(playerList.number) }}>-</button> </td> */}                        
            </div>
          );
        })}
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default Diary;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Header from './layouts/Header'
// import X from './images/X.png'
// import Check from './images/Check.png'

const Diary = () => {

  const [Diarys, setDiarys] = useState([]);
  const [Id, setId] = useState(0)

  useEffect(() => {
    fetchData();
  }, [Id]);

  const fetchData = async () => {
    // const result = await axios("http://localhost:8080/getposition/df");
    const result = await axios("http://localhost:8080/getall");
    setDiarys(result.data);
  };

  
  // const score= async (key) =>
  // {
  //   await axios.put(`http://3.36.145.57:8080/score/${key}`, {})
  //   console.log("score")
  //   fetchData()
  // }
  

   const commit= async (key) =>
  {
    await axios.put(`http://localhost:8080/update/commit/${key}`, {})
    console.log("score")
    fetchData()
  }
  



  
  
  return (
    <>
    <Header></Header>
    <div className='Container'>
    <Table className='diaryTable'>
      <thead>
        {/* <tr>
          <th>{tableHeader[0]}</th>
          <th>{tableHeader[1]}</th>
          <th>{tableHeader[2]}</th>
          <th>{tableHeader[3]}</th>
        </tr> */}
      </thead>
      <tbody>
        <h2>일기장</h2>
        {Diarys.map((DiaryList) => {
          return (
            <div className="diaryContainer" key={DiaryList.id}>
              <div><img style={{width:"15vw",height:"30vh",borderRadius:"30px", marginLeft:"10px"}} src={DiaryList.img}></img></div>
              <td>
              <h6 style={{marginLeft:"30px","marginBottom":"3px"}} >{DiaryList.date}</h6>
              <div className='t_title'>{DiaryList.title}</div>
              <div className='t_content'>{DiaryList.content}</div>
              </td>
              <div className='t_score'>{DiaryList.score}점</div>
              {DiaryList.commit === true ? <td className='t_commit' onClick={()=>commit(DiaryList.id)}>O</td> : <td className='t_commit' onClick={()=>commit(DiaryList.id)}>X</td>}
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
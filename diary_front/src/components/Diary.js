import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
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

  const Header = ["사진", "취준 내용", "당일 점수","커밋 했어?"]
  
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
    <div className='Container'>
    <Table className='diaryTable'>
      <thead>
        {/* <tr>
          <th>{Header[0]}</th>
          <th>{Header[1]}</th>
          <th>{Header[2]}</th>
          <th>{Header[3]}</th>
        </tr> */}
      </thead>
      <tbody>
        {Diarys.map((DiaryList) => {
          return (
            <tr key={DiaryList.id}>
              <td><img  style={{width:"100px",height:"100px",borderRadius:"8px"}} src={DiaryList.img}></img></td>
              <td className='t_title'>{DiaryList.title}</td>
              <td className='t_score' style={{width:"10px"}}>{DiaryList.score} 점</td>
              {/* {DiaryList.commit === true ? <td onClick={()=>commit(DiaryList.id)}><img style={{width:"30px",height:"30px",borderRadius:"8px"}} src={Check} ></img></td> : <td onClick={()=>commit(DiaryList.id)}><img style={{width:"30px",height:"30px",borderRadius:"8px"}} src={X}></img></td>} */}
              {/* <td>{playerList.goal} <button onClick={async () => score(playerList.number)}>+</button> <button onClick={async () => {  score_cancel(playerList.number) }}>-</button> </td> */}                        
            </tr>

            
          );
        })}
      </tbody>
    </Table>
    </div>
  );
};

export default Diary;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Home = () => {

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

  const Header = ["사진", "제목", "커밋 했어?", "점수"]
  
  // const score= async (key) =>
  // {
  //   await axios.put(`http://3.36.145.57:8080/score/${key}`, {})
  //   console.log("score")
  //   fetchData()
  // }
  
  
  
  return (
    <Table className='player_table'>
      <thead>
        <tr>
          <th>{Header[0]}</th>
          <th>{Header[1]}</th>
          <th>{Header[2]}</th>
          <th>{Header[3]}</th>
        </tr>
      </thead>
      <tbody>
        {Diarys.map((DiaryList) => {
          return (
            <tr key={DiaryList.id}>
              <td><img src={DiaryList.photo}></img></td>
              <td>{DiaryList.name}</td>
              <td>{DiaryList.commit}</td>
              <td>{DiaryList.score}</td>
              {/* <td>{playerList.goal} <button onClick={async () => score(playerList.number)}>+</button> <button onClick={async () => {  score_cancel(playerList.number) }}>-</button> </td> */}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

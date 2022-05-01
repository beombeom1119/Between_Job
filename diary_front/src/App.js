import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Diary from './components/Diary';
import Home from './components/Home';
import Update from './components/Update';
import Write from './components/Write';
import Theseday from './components/Theseday';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <Header></Header> */}
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    {/* <Route path="/mypage" element= {<MyPage></MyPage>}></Route> */}
    <Route path="/diary" element= {<Diary/>}/>
    <Route path="/write" element= {<Write/>}/>
    <Route path="/theseday" element={<Theseday/>} />
    <Route path="/update/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

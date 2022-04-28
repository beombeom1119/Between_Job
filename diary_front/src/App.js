import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Diary from './components/Diary';
import Home from './components/layouts/Home';
import Create from './components/Create';
import Mypage from './components/layouts/Mypage';
import Footer from './components/layouts/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <Header></Header> */}
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    {/* <Route path="/mypage" element= {<MyPage></MyPage>}></Route> */}
    <Route path="/create" element= {<Create/>}/>
    <Route path="/mypage" element= {<Mypage/>}/>
    <Route path="/diary" element={<Diary/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

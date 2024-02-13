import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Createpost from './components/Createpost';
import Updatepost from './components/Updatepost';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/create-post" element={<Createpost />}></Route>
          <Route path="/update-post/:id" element={<Updatepost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

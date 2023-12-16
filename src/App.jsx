import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import PostPage from './pages/PostPage';
import PostPush from './pages/PostPush';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>     
          <Route path='about' element={<AboutPage />}/>
          <Route path='posts' element={<PostPage />}/>
          <Route path='postPush' element={<PostPush />}/>
        </Route>
      </Routes>
    </>
  )
} 

export default App;
 
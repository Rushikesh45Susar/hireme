import './App.css';
import { Route , Routes } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/jobdetails" element={<Details/>} />
    </Routes>
    </>
  );
}

export default App;

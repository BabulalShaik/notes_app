import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Archive } from './Pages/Archive';
import { Important } from './Pages/Important';
import { Trash } from './Pages/trash';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path ='/archive' element={<Archive />}></Route>
      <Route path='/important' element={<Important />}></Route>
      <Route path='/trash' element = {<Trash />}></Route>
    </Routes>
  )
}

export default App;

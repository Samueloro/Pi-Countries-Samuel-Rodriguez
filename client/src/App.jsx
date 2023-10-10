import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './Components/Landing/landing'
import Home from './Components/Home/home'
import Detail from './Components/Detail/detail'
import Form from './Components/Form/form'
import NavBar from './Components/NavBar/navBar'


function App() {
  const location = useLocation();


  return (
    <>
      <div>
        {location.pathname !== '/' ? <NavBar /> : null}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
    </>
  )
};

export default App;

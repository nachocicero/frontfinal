
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/*  import Navbar from './componentes/Navbar';  */
 import Layout from './componentes/Layout' 
import About from './pages/About';
import Api from './pages/Api';
import Error from './pages/Error';
import Formulario from './pages/Formulario';
import Home from './pages/Home'
import Productos from './pages/Productos';
import Eliminar from './pages/Eliminar';

function App() {
  return (
   <BrowserRouter>
   <Layout/>
    <Routes path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Api' element={<Api/>}/>
      <Route path='/Formulario' element={<Formulario/>}/>
      <Route path='/Productos' element={<Productos/>}/>
      <Route path='/Eliminar' element={<Eliminar/>}/>
      <Route path='*' errorElement={<Error/>}/>
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;


/* import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Error from './Pages/Error';
import Formulario from './Pages/Formulario';
import Home from './Pages/Home';
import Productos from './Pages/Productos';
import Api from './Pages/Api';
import Navbar from './Componentes/Navbar';



function App() {   //navegacion tradicional
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/api' element={<Api />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='*' errorElement={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App; */
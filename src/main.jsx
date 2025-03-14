import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom' //aqui se esta importando la libreria que te permite declarar rutas
import App from './components/App.jsx'
import "./main.css"
import Pagina404 from './components/Pagina404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './components/Home.jsx'
import Criptopage from './components/Cripto/CriptoPage.jsx'
import Perfil from './components/Usuario/Perfil.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import Login from './components/Usuario/Login.jsx'




createRoot(document.getElementById('root')).render(
  <>
    <UserContextProvider>
      <BrowserRouter>
        {/**como los componentes link tiene que estar dentro de BrowserRouter, colocamos el componente menu que es donde estan los componentes link dentro */}
        <StrictMode>
    
          <Routes> {/**Dentro de routes se declarar todas las rutas necesarias */}
            <Route path='/' element={<App/>}> {/**estos  son grupos de rutas y esta es la ruta principal, lo que quiere decir que todas las rutas hijas heredaran o se comportaran como la ruta principal*/}
              <Route index element ={<Home/>}/> {/**el path es la direccion a la que quiero apuntar con el componente que se asigana, en este caso el home(inicio) va a renderizar el componente app*/}
              {/**el / significa el home de la aplicacion */}
              <Route path='perfil' element={<Perfil/>}/>
            </Route>
            
            <Route path='/criptomonedas' element={<App/>}>
              <Route index element={<Cuadricula/>}/>
              <Route path=':id' element={<Criptopage/>}/>
            </Route>

            <Route path= '/login' element ={<Login/>}/>

            {/**los dos puntos te permiten renderizar cualquier componente, o endpoint */}

            {/**end point:es una URL que se utiliza para acceder a un recurso de una aplicación web a través de una API. Es similar a la URL de un sitio web, y se utiliza para transmitir datos entre programas.  */}

            <Route path='*' element= {<Pagina404/>}/>
              {/**el * como ruta hace referencia a toda ruta no creada  */}
    
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </UserContextProvider>
  </>


)

{/**cada ruta tiene dos props o atributos importantes que recibir, el path*/}
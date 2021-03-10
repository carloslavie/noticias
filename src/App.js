import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoDeNoticias from './components/ListadoDeNoticias';


function App() {

  //definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {

    const consultarAPI = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=84729dc602544e0295d7ce0696789f32`

        const respuesta = await fetch(url)
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
        <Header 
            titulo = 'Buscador de Noticias'
        />

        <div className="container white">
          <Formulario
              guardarCategoria = {guardarCategoria}
          />
          <ListadoDeNoticias
          noticias = {noticias}
          />
        </div>
    </Fragment>
  );
}

export default App;

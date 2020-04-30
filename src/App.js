import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import ImagesList from './components/ImagesList';

function App() {
  const [state, setState] = useState('');
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (state.trim() === '') return;

    const fetchData = async () => {
      const ImagesForPage = 30;
      const ApiKey = '16302625-088552e95462d912a4ef5bfd6'
      const url = `https://pixabay.com/api/?key=${ApiKey}&q=${state}&per_page=${ImagesForPage}&page${actualPage}`;

      const response = await fetch(url);
      const data = await response.json();

      setImages(data.hits);

      // Enviar total pages

      setTotalPages(Math.ceil(data.totalHits / ImagesForPage));

      const jumbotron = document.querySelector('#Jumbotron');

      jumbotron.scrollIntoView({
        behavior: "smooth",
      });

    }

    fetchData();

  }, [state, actualPage])

  const handleClickSubtrack = () => {

    if (actualPage <= 1) return;

    const pages = actualPage -1;

    setActualPage(pages);


  }

  const handleClickSum = () => {

    if (actualPage === totalPages ) return;

    const pages = actualPage + 1;

    setActualPage(pages);
  }

  return (
    <div className="container">
      <div className="jumbotron" id="Jumbotron">
        <p className="lead text-center">
          Buscador de Imagenes
        </p>

        <Form 
        setState={setState}
        />
      </div>

      <div className="row justify-content-center">
        <ImagesList 
          images={images}
        />

      { actualPage > 1 && 
        <button
          onClick={handleClickSubtrack}
          type="button"
          className="btn btn-info mr-1"
        >
          &laquo; Anterior
        </button>
      }

      { actualPage !== totalPages &&
        <button
          onClick={handleClickSum}
          type="button"
          className="btn btn-info"
        >
          Siguiente &raquo;
        </button>
      }

      </div>
    </div>
  );
}

export default App;

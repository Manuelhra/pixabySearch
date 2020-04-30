import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Error from './Error';

const Form = ({ setState }) => {

  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar campos form

    if (search.trim() === '') return setError(true);

    setError(false);

    // Enviar la data al component principal
    setState(search);

  }

  return ( 
    <form
    onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="form-group col-md-8">

          <input 
          type="text"
          className="form-control form-control-lg"
          placeholder="Busca una imágen: futbol o cafe"
          onChange={(event) => setSearch(event.target.value)}
          value={search}

          />
        </div>

        <div className="form-group col-md-4">

          <input 
          type="submit"
          className="btn btn-lg btn-danger btm-block"
          value="Buscar"

          />
        </div>
      </div>
      {error && <Error  message="Agrega un término de busqueda" />}
    </form>
   );
}

Form.propTypes = {
  setState: PropTypes.func,
};
 
export default Form;
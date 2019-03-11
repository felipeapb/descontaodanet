
import React from 'react';

import Button from '../components/buttons'

const Search = ({title}) => (
  <section>
  <h1>{title}</h1>
  <div className="card text-center">
  <form >
        <div className="row">
          <div className="col-md-9">
              <input type="text" className="form-control" placeholder="Buscar algum produto? " />
          </div>
          <div className="col-md-3">
        <Button style='btn btn-primary' text='Busque o melhor preço'></Button>
          </div>
        </div>
      </form>
  </div>
  </section>
);
export default Search;



import React from 'react';

import Search from '../components/search';
import Sales from '../components/sales';
import Cupons from '../components/cupons';
import Footer from '../components/footer';



const Content = () => (
<main className="container bg-white rounded">  
  <Search title="ACHE OS MELHORES PREÇOS"></Search>
  <Sales ></Sales>
  <Cupons title ="VEJA NOSSOS CUPONS"></Cupons>
  <Footer></Footer>
</main>
)
export default Content;


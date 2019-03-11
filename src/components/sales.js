
import React, { Component } from 'react';

import Img from '../components/img';
import Buy from '../components/buy';

class Sale extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }




  componentDidMount() {
    fetch("http://bws.buscape.com.br/service/findOfferList/lomadee/65717751673178504d42633d/BR/?format=json&results=30&sourceId=36095237&categoryId=1437&allowedSellers=81&page=1")
    .then(res => res.json())
    .then(
      (result) => {

        this.setState({
          isLoaded: true,
          items: result.offer
        });
// console.log(result.offer)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('deu erro')
      }
    )


  }

  render() {
    const { items } = this.state;
    return (
<div>
         
      <h2>PRODUTOS EM PROMOÇÃO</h2>
      <div className="row">   
      {items.map(item => (

        <article key={item.offer.id} className="col-md-3 mostraProduto">
        <div className="card" >
        <Img pic={item.offer.thumbnail.url} alt={item.offer.offername}></Img>
          
            <div className="card-body">
              <p className="card-text">{item.offer.offername} </p>
              <p className="price">R$ {item.offer.price.value} </p>
              
              <Buy link= {item.offer.links[0].link.url}  text="Comprar agora" style="btn btn-success"></Buy>
            </div>
        </div>
    </article>
       
      ))}
   
   </div>
   </div>   
    
     
   
    );
  }
}

export default Sale;






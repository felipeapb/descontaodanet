


import React, { Component } from 'react';

import Img from '../components/img';
import Buy from '../components/buy';

class Cupom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }




  componentDidMount() {
    fetch("http://bws.buscape.com.br/service/coupons/lomadee/6b6e7253714c4c302b7a6b3d/BR/?format=json&results=30&sourceId=36095528&page=1")
    .then(res => res.json())
    .then(
      (result) => {

        this.setState({
          isLoaded: true,
          items: result.coupon
        });
 console.log(result.coupon)
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
         
      <h2>CUPONS</h2>
      <div className="row">   
      {items.map(item => (
       <article key={item.coupon.id}   className="col-md-3">
       <div className="card text-white bg-warning mb-3" >
               <div className="card-header">{item.coupon.couponname} </div>
               <div className="card-body">
                 <h5 className="card-title">CÓDIGO CUPOM </h5>
                 <p className="card-text">{item.coupon.couponcode}</p>
                 <p className="card-text">LOJA</p>
                 <p className="card-text">{item.coupon.seller.sellername}</p>
                 <Buy link={item.coupon.links[0].link.url}  text="Pegar agora" style="btn btn-success"></Buy>
               </div>
       </div>
     </article>
      ))}
   
   </div>
   </div>   
    
     
   
    );
  }
}

export default Cupom;







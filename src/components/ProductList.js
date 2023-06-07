import React from 'react';
import Product from './Product';
import './Product.css';

const ProductList = ({shoes,cartAction,checkout }) => {
  return (
    <main className='grid'>
      {
        shoes.map((shoe, i) => {
          return (
            <Product
              key={i}
              id={shoes[i].id}
              pic={shoes[i].pic}
              name={shoes[i].name}
              price={shoes[i].price}
              addtoCartClicked={shoes[i].addtoCartClicked}
              cartAction={cartAction}
              checkout={checkout}
              />
          );
        })
      }
    </main>
 );
}

export default ProductList;
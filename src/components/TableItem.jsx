import React from 'react'

export default function TableItem({product, ...props}) {
  
  const editProduct = (e) => {
    props.edit(e.target.dataset.productId)
    props.setModal(true);
  }

  const copyProduct = () => {
    const copytedProduct = {
      ...product,
      id: Date.now()
    };
    props.create(copytedProduct);

  }

  return (
    <div 
      className='d-flex justify-content-between border-bottom py-3 align-items-center'>
        <div style={{width: '50px'}}>{props.index}</div>
        <div style={{width: '300px'}}>{product.name}</div>
        <div style={{width: '100px'}}>{product.price}</div>
        <div style={{width: '100px'}}>{product.quantity}</div>
        <div style={{width: '150px'}}>{product.measurement}</div>
        <div style={{width: '220px'}}>
            <button 
              data-product-id={product.id} 
              onClick={editProduct} 
              className="btn btn-outline-warning">
              Edit
            </button>
            <button onClick={copyProduct} className='btn btn-outline-secondary mx-2'>Copy</button>
            <button onClick={() => props.remove(product)} className="btn btn-outline-danger">Delete</button>
        </div>
    </div> 
  )
}

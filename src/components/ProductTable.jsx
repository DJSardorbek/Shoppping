import React from 'react'
import TableItem from './TableItem'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default function ProductTable({products, ...props}) {
  return (
      // Product table
      <div 
        className='d-flex flex-column justify-content-between'
        style={{overflowX: 'auto'}}>
        {/* thead */}
        <div 
          style={{minWidth: '100%',
           width: 'max-content', 
           background: 'linear-gradient(rgb(73, 179, 251) 0%, rgb(67, 107, 255) 100%)',
           color: '#fff',
           fontSize: '15px'}} 
          className='d-flex justify-content-between mb-3 border p-3 border rounded-4'>
          <div style={{width: '50px'}}>#</div>
          <div style={{width: '300px'}}>Name</div>
          <div style={{width: '100px'}}>Price</div>
          <div style={{width: '100px'}}>Quantity</div>
          <div style={{width: '150px'}}>Measurement</div>
          <div style={{width: '220px'}}>Actions</div>
        </div>
        {/* tbody */}
        <div className='rounded-4 px-3'
            style={{background: '#fff', minWidth: '100%', width: 'max-content'}}>
            <TransitionGroup>
              {products.map((product, i) => (
                <CSSTransition
                key={product.id}
                timeout={500}
                classNames="item"
              >
                <TableItem 
                product={product} 
                index={i+1} 
                create={props.create} 
                remove={props.remove} 
                edit={props.edit}
                modal={props.modal}
                setModal={props.setModal}/>
              </CSSTransition>
              ))}
            </TransitionGroup>
          
        </div>
        
      </div>
      // <table className="table table-striped table-hover border">
      //   <thead>
      //     <tr>
      //         <th>#</th>
      //         <th>Name</th>
      //         <th>Price</th>
      //         <th>Quantity</th>
      //         <th>Measurement</th>
      //         <th>Actions</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {products.map((product, i) => (
      //     <TableItem 
      //       product={product} 
      //       key={product.id} 
      //       index={i+1} 
      //       create={props.create} 
      //       remove={props.remove} 
      //       edit={props.edit}
      //       modal={props.modal}
      //       setModal={props.setModal}/>
      //     ))}
      //   </tbody>
      // </table>
    
  )
}

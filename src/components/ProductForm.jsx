/* eslint-disable eqeqeq */
import React, {useState, useEffect } from 'react'
import MySelect from './UI/select/MySelect';
import MyButton from './UI/button/MyButton';

export default function ProductForm({create, ...props}) {

    const [product, setProduct] = useState(props.editedProduct);
    const [uptId, setUpt] = useState(props.updatedId);
    const [buttonName, setButtonName] = useState('Add Product');
    const [select, setSelect] = useState('');
    
    useEffect(() => {
        const ok = product.name == '' && product.price == 0 && product.quantity == 0;
        if(ok) {
            setButtonName('Add Product');
        }
        if(uptId != props.updatedId){
            setProduct(props.editedProduct)
            setSelect(props.editedProduct.measurement)
            setUpt(props.updatedId)
            setButtonName('Edit Product');
        } 
    }, [product.name, product.price, product.quantity, uptId, props.updatedId, props.editedProduct]);
    function addProduct (e) {
        e.preventDefault();
        if(product.name != '' && select)
        {
            const newProduct = {
                ...product,
                measurement: select,
                id: Date.now()
            };
            create(newProduct);
            setProduct({name: '', price: 0, quantity: 0, measurement: ''});
            setSelect('');
        } 
    }

    return (
        <form>
            <h3 className='text-center'>Add new product</h3>
            <div className='form-group mb-2'>
                <label htmlFor="product">Product</label>
                <input 
                id='product'
                className="form-control" 
                type="text"
                placeholder="Enter product..."
                value={product.name}
                onChange={(e) => setProduct({...product, name: e.target.value})}/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="price">Price</label>
                <input 
                id='price'
                className="form-control"
                type="text"
                placeholder="Enter price..."
                value={product.price}
                onChange={(e) => setProduct({...product, price: e.target.value})}/>
            </div>
            
            <div className="form-group mb-3">
                <label htmlFor="quan">Quantity</label>
                <input 
                id='quan'
                className="form-control" 
                type="text"
                placeholder="Enter quantity..."
                value={product.quantity}
                onChange={(e) => setProduct({...product, quantity: e.target.value})}/>
            </div>
            
            <div className="form-group mb-3">
                <label htmlFor="meas">Measurement</label>
                <MySelect 
                id="meas"
                value={select}
                onChange={selected => setSelect(selected)}
                defaultValue="Choose..."
                options={[
                    {value: 'dona', name: 'dona'},
                    {value: 'kg', name: 'kg'},
                    {value: 'litr', name: 'litr'}
                ]}
                />
            </div>
            
            <MyButton 
                onClick={addProduct}
                className="btn btn-primary w-100"
                >
                {buttonName}
            </MyButton>
        </form>
  )
}

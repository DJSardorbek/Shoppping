import React, { useState, useMemo } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import "./styles/app.css";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Coca cola 1.5l", price: 14000, quantity: 50, measurement: "dona" },
    { id: 2, name: "Pepsi 1.5l", price: 14000, quantity: 150, measurement: "dona" },
    { id: 3, name: "Olma qizil", price: 10000, quantity: 100, measurement: "kg" },
    { id: 4, name: "Nok", price: 15000, quantity: 80, measurement: "kg" },
  ]);

  const createProduct = (newProduct) => {
    if (updatedId.id != null) {
      const index = products.findIndex((val) => +val.id === +updatedId.id);
      products[index].name = newProduct.name;
      products[index].price = newProduct.price;
      products[index].quantity = newProduct.quantity;
      products[index].measurement = newProduct.measurement;

      setEditProduct({
        name: "",
        price: 0,
        quantity: 0,
        measurement: "",
      });
      setUpdatedId({ id: null });
    } else {
      setProducts([...products, newProduct]);
    }
    setModal(false);
  };

  const removeProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const [editedProduct, setEditProduct] = useState({
    name: "", price: 0, quantity: 0, measurement: "",
  });
  const [updatedId, setUpdatedId] = useState({ id: null });
  const editProduct = (productId) => {
    setUpdatedId({ id: productId });

    products.forEach((product) => {
      if (product.id === +productId) {
        setEditProduct({
          ...editedProduct,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          measurement: product.measurement,
        });
      }
    });
  };

  const [modal, setModal] = useState(false);

  const openAddProduct = () => {
    
    setModal(true);
    setEditProduct({
      name: "", price: 0, quantity: 0, measurement: ""
    });
    setUpdatedId({id: null});
  }

  const [search, setSearch] = useState('');

  const SearchProduct = useMemo(() => { 
    console.log('render');
      if(search) {
        return products.filter(product => product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      }
      else {
        return products;
      }
  }, [search, products]);

  return (
    <div className="app pt-5">

      {/* search & add posts */}
      <div className="d-flex justify-content-between mb-3 gap-3 flex-wrap">
        <MyInput
          className='form-control rounded-5 border-0 px-4'
          style={{width: '300px', fontSize: '15px', background: 'rgb(227, 236, 244)'}}
          placeholder="Search product..."
          value={search}
          onChange={(e)=> setSearch(e.target.value)}>

        </MyInput>
        <MyButton
          className="btn btn-primary border"
          onClick={openAddProduct}
          style={{background: 'linear-gradient(rgb(73, 179, 251) 0%, rgb(67, 107, 255) 100%)'}}>
            Add Products
        </MyButton>
      </div>
      
      {/* Modal form */}
      <MyModal
        modal={modal}
        setModal={setModal}>
      <ProductForm
        create={createProduct}
        editedProduct={editedProduct}
        updatedId={updatedId}
      />
      </MyModal>
      
      {/* products table */}
      {SearchProduct.length ? (
        <ProductTable
          products={SearchProduct}
          create={createProduct}
          remove={removeProduct}
          edit={editProduct}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        <h6 className="text-center my-3">You should add some product</h6>
      )}
      
    </div>
  );
}

export default App;

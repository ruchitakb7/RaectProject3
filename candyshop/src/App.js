import './App.css';
import React , {useState} from "react"
import Header from "./components/layout/Header.js"
import CandyForm from './components/candy/candyform/CandyForm.js';
import CartProvider from './store/CartProvider.js';
import CartModal from './components/UI/CartModal.js';

function App() {

  const [isModalOpen,setModal]=useState(false)

  const openModal=()=>{
    console.log('helooo')
    setModal(true)
  }

  const closeModal=()=>{
    console.log('closss')
    setModal(false)
  }
  return (
    <CartProvider>
       <Header openModal={openModal}></Header>
       <CandyForm></CandyForm>
       {isModalOpen && <CartModal onClose={closeModal}></CartModal>}
       </CartProvider>
  
  );
}

export default App;

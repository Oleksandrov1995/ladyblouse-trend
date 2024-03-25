import './ShoppingList.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { sendMessage } from 'utilities/sendMessage';


export const ShoppingList = ({ modalOpen, modalClose }) => {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [post, setPost] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [noCall, setNoCall] = useState(false);
  const [question, setQuestion] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));

    if (products) {
      setProducts(products);
    }
  }, [modalOpen]);


  useEffect(() => {
    if (isSuccess) {
      Notify.success('Дякуємо! Заявка прийнята.');
      setTimeout(() => setIsSuccess(false), 4000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFailure) {
      Notify.failure('Введіть Ваш номер телефону');
      setTimeout(() => setIsFailure(false), 4000);
    }
  }, [isFailure]);
  

  const handleDeleteProduct = (productId, productSize) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId && product.size === productSize) {
        return null;
      }
    
      return product;
    }).filter(Boolean);
    setProducts(updatedProducts);
  };
  

  const handleSizeChange = (productId, productSize, selectedSize) => {
    
    const updatedSelectedSizes = {
      ...selectedSizes,
      [productId]: selectedSize
    };
    setSelectedSizes(updatedSelectedSizes);
    
    const updatedProducts = products.map(product => {
      if (product.id === productId && product.size === productSize) {
        return { ...product, size: selectedSize };
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  

  const handleAddToCart = (productId, productSize) => {
    const updatedProducts = products.map(product =>
      product.id === productId && product.size === productSize
        ? { ...product, quantity: (product.quantity || 1) + 1 }
        : product
    );
    setProducts(updatedProducts);
  };


  const handleRemoveFromCart = (productId, productSize) => {
    const updatedProducts = products
      .map(product =>
        product.id === productId && product.size === productSize
          ? { ...product, quantity: Math.max((product.quantity || 0) - 1, 0) }
          : product
      )
      .filter(product => product.quantity > 0);

    return setProducts(updatedProducts);
  };

 const totalAmount = products.reduce((total, product) => {
  let productTotal = (product.todayPrice || 0) * (product.quantity || 1);

 

  return total + productTotal;
}, 0);
  const handleFormSubmit = async e => {
    e.preventDefault();
    const phoneRegex = /^\d{10,12}$/;
    if (!phoneRegex.test(phone)) {
      setIsFailure(true);
      return;
    }
    sendMessage(`Нова заявка! Хочу Сорочку Бавовна!!!
      \nТовар: ${products.map(
        product => `${product.color} ${product.size} (${product.quantity})`
      )}
      \nЗагальна сума: ${totalAmount}
      \nІм'я: ${name}
      \nТелефон: ${phone}
      \nНаселений пункт: ${location}
      \nПошта: ${post}
      \nОплата: ${paymentMethod}
      \nНе Дзвонити?: ${noCall}
      \nЗапитання: ${question}
      `);
    setIsSuccess(true);
    setProducts([]);
    setName('');
    setPhone('');
    setLocation('');
    setPost('');
    setPaymentMethod('');
    setNoCall(false);
    setQuestion('');
    handleModalClose();
    localStorage.removeItem('products');
  };

  const handleModalClose = async () => {
   
    await localStorage.setItem('products', JSON.stringify(products));
    modalClose();
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={'modal'}
      >
        <Box className={'modalBox'}>
          <AiOutlineCloseCircle
            size={30}
            onClick={handleModalClose}
            className="modalButtonClose"
          />
          <h2 className="shoppingList-title">Ваше замовлення:</h2>
          {products &&
            products.map(product => (
              <div key={product.id+product.size} className="shoppingList-product">
             
                <p className="shoppingList-productName">
                  Колір сорочки: {product.color}
                </p>
                <form className='modalSelectSize'>
                <label  htmlFor="Size" >Розмір:</label>
                <select className='modalSelect'
                  id="Size"
                  value={product.size}
                  onChange={(e) => handleSizeChange(product.id, product.size, e.target.value)}
                >
                  <option value="0">- розмір -</option>
                  <option value="42-44">42-44</option>
                  <option value="46-48">46-48</option>
                  <option value="50-52">50-52</option>
                  <option value="54-56">54-56</option>
                  <option value="58-60">58-60</option>
                </select>
                </form>

                <p className="shoppingList-quantity">
                  Кількість:
                  <RemoveCircleOutlineIcon
                    onClick={() => handleRemoveFromCart(product.id,product.size)}
                  />
                  {product.quantity || 1}{' '}
                  <AddCircleIcon onClick={() => handleAddToCart(product.id,product.size)} />
                  <span className="shoppingList-productPrice">
                  {  (product.todayPrice * (product.quantity || 1))} грн.

                  </span>
                  <DeleteOutlineIcon
                    className="shoppingList-deleteIcon"
                    onClick={() => handleDeleteProduct(product.id, product.size)}
                  />
                </p>
              </div>
            ))}
          <p className="shoppingList-totalPrice">
            Загальна сума: {totalAmount} гривень
          </p>
          <form className="shoppingList-form" onSubmit={handleFormSubmit}>
            <ul>
              <li>
                <label>
                  ПІБ одержувача
                  <input
                    className="shoppingList-formInput"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label>
                  Телефон
                  <input
                    className="shoppingList-formInput"
                    type="tel"
                    name="phone"
                    placeholder="099-999-99-99"
                    value={phone}
                    onChange={e =>
                      setPhone(e.target.value.replace(/\D/g, '').slice(0, 12))
                    }
                  />
                </label>
              </li>
              <li>
                <label>
                  Населений пункт
                  <input
                    className="shoppingList-formInput"
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label>
                  Номер відділення Нової пошти або індекс Укрпошти
                  <input
                    className="shoppingList-formInput"
                    type="text"
                    name="post"
                    value={post}
                    onChange={e => setPost(e.target.value)}
                  />
                </label>
              </li>
            </ul>

            <section>
              <p className="shoppingList-paymentTitle">Спосіб оплати</p>
              <label>
                <input
                  className="shoppingList-payment"
                  type="radio"
                  checked={paymentMethod === 'imposed'}
                  name="paymentMethod"
                  value="imposed"
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                При отриманні у відділенні пошти (накладний платіж)
              </label>
              <label>
                <input
                  className="shoppingList-payment"
                  type="radio"
                  checked={paymentMethod === 'card'}
                  name="paymentMethod"
                  value="card"
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                Оплата на картку (надішлемо смс із номером картки для оплати)
              </label>
            </section>
            <label className="shoppingList-checkbox">
              <input
                className="shoppingList-payment"
                type="checkbox"
                checked={noCall}
                onChange={e => setNoCall(e.target.checked)}
              />
              Надіслати посилку без дзвінка менеджера
            </label>
            <input
              className="shoppingList-questionInput"
              type="text"
              name="question"
              value={question}
              placeholder="Залишіть Ваше запитання чи уточнення за необхідності"
              onChange={e => setQuestion(e.target.value)}
            />
            <p className="shoppingList-totalPrice">
              Загальна сума: {totalAmount} гривень
            </p>
            <button type="submit">Замовити</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

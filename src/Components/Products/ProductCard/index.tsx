import React, { useState } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/products';
import { Value } from 'sass';

interface TProps {
  productName: string;
  productValue: number;
  // img: string;
}

const Product = ({ productName, productValue }: TProps) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const deleteCount = () => {
    setCount((prevValue) => prevValue - 1);
  };

  // const sumHandler = () => {
  //   setTotal((prevValue) => prevValue * productValue);
  // }
  const addProductHandler = () => {
    dispatch(addProduct({ name: productName, count }));
  }; // селектор выводит висит на кнопке добавить в корзину count убрала

  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button className="bth" onClick={deleteCount} disabled={count === 0}>
          Удалить работу
        </button>
        <span>{count}</span>
        <button className="bth" onClick={addCount} >Добавить работу</button>
      </div>
      <div>
      <span>{`Сумма : ${count * productValue}`}</span>
      </div>
       {/* <div>
        <button onClick={addProductHandler}>К Вашему портфолио</button>
      </div> */}
      </div>
  );
};

export const ProductCard = React.memo(Product);

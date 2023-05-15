import React, { useState } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/products';
import { Value } from 'sass';

interface TProps {
  productName: string;
  productValue: number;
}

const Product = ({ productName, productValue }: TProps) => {
  const [count, setCount] = useState(0);
 // const [total, setTotal] = useState(count * productValue);
  const dispatch = useDispatch();

  const addCount = () => {
    setCount((prevValue) => prevValue + 1 * productValue);
  };

  const deleteCount = () => {
    setCount((prevValue) => prevValue - 1 * productValue);
  };

  // const Sum = () => {
  //   setTotal((prevValue) => prevValue * productValue);
  // }
  const addProductHandler = () => {
    dispatch(addProduct({ name: productName, count }));
  }; // селектор выводит висит на кнопке добавить в корзину count убрала

  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button onClick={deleteCount} disabled={count === 0}>
          Удалить работу
        </button>
        <span>{count}</span>
        <button onClick={addCount} >Добавить работу</button>
      </div>
      {/* <div>
      <span>{count}</span>
      <button onClick={Sum} >Получить сумму</button>
      </div> */}
      {/* <div>
        <button onClick={addProductHandler}>К Вашему портфолио</button>
      </div> */}
      </div>
  );
};

export const ProductCard = React.memo(Product);

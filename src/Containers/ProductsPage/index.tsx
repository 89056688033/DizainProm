import React, { useMemo, useState } from 'react';
import { ProductCard } from '../../Components/Products/ProductCard';
import styles from './ProductsPage.module.scss';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products/selectors';
import { useBreakpoint } from '../../utils/hooks/useBreakpoint';
import { InformationNominations } from '../../Text/CourseText';
import ig from '../../accets/Podarok.png'

const calculateValue = () => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result = result + 1;
  }
  return result;
};

export const ProductsPage = () => {
  const [count, setCount] = useState(0);
  const products = useSelector(getProducts); // селектор с продуктами чтобы выводил на кнопке products.map с див

  const isBreakpoint = useBreakpoint(720); // хук в папке хук

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
    <div className={styles.t}><InformationNominations />
    </div>
      <div className={styles.productsWrapper}>
        {/* {isBreakpoint
      ? (
      <button>Mobile Button</button>
        )
      : (
      <button onClick={handleButtonClick}>{count}</button>
        )} */}
        <ProductCard productName={`Дизайн транспортных средств цена одной работы ${100} рублей`} productValue={100} />
        <ProductCard productName={`Город будущего цена одной работы ${500} рублей`} productValue={500} />
        <ProductCard productName={`Территория IT технологий цена одной работы ${300} рублей`} productValue={300}/>
      </div>
      {/* <span>Количесво Ваших работ на фестивале</span>
      {products.map((product, index) => (
        <div key={index}>
          <span>{`Номинация -  ${product.name}`}</span>
          <span>{`Количество проектов - ${product.count}`}</span>
              </div> */}
    </>
  );
};

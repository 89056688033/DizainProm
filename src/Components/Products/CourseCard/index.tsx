import React, { useState } from 'react';
import './index.scss';
interface TProps {
  productName: string;
  limit: number;
  // img: SVGAElement;
}

export const CourseCard = ({ productName, limit }: TProps) => {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);
  // const [count4, setCount4] = useState(0);
  const addCount = () => {
    setCount((prevValue) => prevValue + 1);
    // setCount(count + 1); асинхронная async
    // setCount2(count2 + 1);
    // await Promise.resolve().then(() => {
    //   console.log('promise');
    // });
    // setCount3(count3 + 1);
    // setCount4(count4 + 1);
  };
  const deleteCount = () => {
    setCount((prevValue) => prevValue - 1);
  };

  // console.log('render');
  // результат сравнения это булеан значения
  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button className="bth" onClick={deleteCount} disabled={count === 0}>
          Убрать участника </button>
        <span>{count}</span>
        <button className="bth" onClick={addCount} disabled={count >= limit}>Добавить участника</button>
      </div>
    </div>
  );
};

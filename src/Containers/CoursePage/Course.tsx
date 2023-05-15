import React, { useState, useEffect } from 'react';
import re from '../CoursePage/Course.module.scss';
import { CourseCard } from '../../Components/Products/CourseCard';
import { InformationCourses } from '../../Text/CourseText';
import { Value } from 'sass';
// import img from '../../accets/book.png';

const productArray = [
  {
    id: 1,
    // img:{img},
    name: '«Дизайн как мировоззрение: реальность, вызовы, прогнозы»',
    value: 100,
  },
  {
    id: 2,
    name: '«Потребность современной промышленности в дизайне»',
    value: 200,
  },
  {
    id: 3,
    name: 'Роль дизайна в формировании городской среды',
    value: 300,
  },
  {
    id: 3,
    name: 'Дизайн - как образ жизни',
    value: 400,
  },
];
export function CoursePage() {
  const [limit, setLimit] = useState(10);
  const addLimit = () => {
    setLimit(limit + 1);
  };
  const delelteLimit = () => {
    setLimit(limit - 1);
  };

  // хуки внутри компоненты только
  return (
    <div>
    <div className={re.t}><InformationCourses /></div>
    <div className={re.productsWrapper}>
      {/* <CustomInput1 /> */}
      {/* <button onClick={delelteLimit} disabled={limit === 0}>
        Удалить участника
      </button>
      <span>{limit}</span>
      {/* <button onClick={addLimit}>Добавить участника</button>
      <ProductCard productName="Orange" /> */}
      {/* <button onClick={addLimit}>Добавить участника</button> */}
      {productArray.map(({ id, name }) => (
        <CourseCard productName={name} key={id} limit={limit} />
      ))}
    </div>
    </div>
  );
}
// мапим, ключи обязательны key={id} возвращаем дивы отрендарится

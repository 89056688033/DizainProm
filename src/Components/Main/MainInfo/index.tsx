import React from 'react';
import s from '../banner_info.module.scss';
import { routes } from '../../../utils/constants/routes';
import img from '../../../accets/Lampa_yellow.png';
import { useLocation, useParams, useNavigate, Navigate } from 'react-router-dom';

// const Img_lampa = () => {
//   return (
//     <div className={s.img}>
//       <img src={img} alt="" />
//     </div>
//   );
// };

// const Info_festival = () => {
//   return (
//     <div className={s.info}>
//       <div className={s.nazvanie}>
//         <h1 className={s.zagolovok}>
//           Фестиваль
//           <br />
//           промышленного дизайна
//         </h1>
//         <p className={s.place}>состоится осенью в Нижнем Новгороде</p>
//       </div>
//       <div className={s.banner_info_buttons}>
//         <a href="my-app/src/components/banner_info" className={s.btn_primary}>
//           {' '}
//           Посетить{' '}
//         </a>
//       </div>

//       <div className={s.main_idea}>
//         <h2 className={s.zag}>Главные идеи фестиваля:</h2>
//         <p className={s.text_banner}>
//           {' '}
//           Интеграция дизайна в повседневную жизнь
//           <br />
//           людей. Формирование у человека желание и <br />
//           потребность в дизайнерских решениях.
//           <br />
//           Проникновение дизайна в сферу личных <br /> интересов (мебель, интерьер, вещи), <br />{' '}
//           окружающего пространства вне дома <br /> (общественные пространства, здания, <br />{' '}
//           транспорт и технологии(позволяют задуматься <br /> о том что хочет в будущем).{' '}
//         </p>
//       </div>
//     </div>
//   );
// };

export const MainIn = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const GoGests = () => {
    navigate('/products');
  };
  const GoParticipats = () => {
    navigate('/course');
    // navigate('/posts/5465');
  };
  if (params.id) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.banner_info}>
      <div className={s.img}>
      <img src={img} alt="" />
    </div>
    <div className={s.info}>
      <div className={s.nazvanie}>
        <h1 className={s.zagolovok}>
          Фестиваль
          <br />
          промышленного дизайна
        </h1>
        <p className={s.place}>состоится осенью в Нижнем Новгороде</p>
      </div>
      <div className={s.banner_info_buttons}>
        <button className={s.btn_primary} onClick={GoGests}>Для гостей фестиваля</button>
        <button className={s.btn_primary} onClick={GoParticipats}>Для участников фестиваля</button>
        {/* <a href="my-app/src/components/banner_info" className={s.btn_primary}>
          {' '}
          Посетить для участников{' '}
        </a>
        <a href="my-app/src/components/banner_info" className={s.btn_primary}>
          {' '}
          Посетить для гостей{' '}
        </a> */}
      </div>

      <div className={s.main_idea}>
        <h2 className={s.zag}>Главные идеи фестиваля:</h2>
        <p className={s.text_banner}>
          {' '}
          Интеграция дизайна в повседневную жизнь
          <br />
          людей. Формирование у человека желание и <br />
          потребность в дизайнерских решениях.
          <br />
          Проникновение дизайна в сферу личных <br /> интересов (мебель, интерьер, вещи), <br />{' '}
          окружающего пространства вне дома <br /> (общественные пространства, здания, <br />{' '}
          транспорт и технологии(позволяют задуматься <br /> о том что хочет в будущем).{' '}
        </p>
      </div>
    </div>
    </div>
  );
};

import React from 'react';
import classes from './Footer.module.scss';
import img from '../../../accets/headerLogo.svg';
import Yt from '../../../accets/YuTube.png';
import VK from '../../../accets/vk.png';
import Lg from '../../../accets/Logo.png';
import Tg from '../../../accets/Telegram.png';

// import { Link } from 'react-router-dom';
// import F from '../../../accets/Footer.png';
// import { routes } from '../../../utils/constants/routes';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserEmail, getUserToken } from '../../../store/userData/selectors';
// import { resetUserData } from '../../../store/userData';

export const Footer = () => {
  // const dispatch = useDispatch();
  // const email = useSelector(getUserEmail);
  // const token = useSelector(getUserToken);
  // // скидывает состояние logOutHandler на баттоне кнопке

  // const logOutHandler = () => dispatch(resetUserData());

  return (
    <div className={classes.header}>
      <div className={classes.header__img}>
        <img src={img} alt="" />
      </div>
      <div className={classes.header__menuWrap}>
        <div className={classes.header__menu}>
          <div className={classes.header__menu__title}>
            Промышленный
            <br />
            дизайн
          </div>
          <div className={classes.header__menu__list}>
            <ul>
              <li>
                <a href="">Контакты</a>
              </li>
              <li>
                <a href="">О фестивале</a>
              </li>
            </ul>
            {/* <p className={classes.p1}> Авторское право © 2023. Все права защищены</p> */}
          </div>
          <div className={classes.ceti}>
            <p className={classes.p}>Мы в соц. сетях</p>
            <img className={classes.img1} src={Yt} alt="" />
            <img className={classes.img2} src={VK} alt="" />
            <img className={classes.img3} src={Tg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

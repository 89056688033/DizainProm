import React from 'react';
import classes from './Header.module.scss';
import img from '../../../accets/headerLogo.svg';
import { Link } from 'react-router-dom';
import F from '../../../accets/Footer.png';
import { routes } from '../../../utils/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail, getUserToken } from '../../../store/userData/selectors';
import { resetUserData } from '../../../store/userData';

export const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const token = useSelector(getUserToken);
  // скидывает состояние logOutHandler на баттоне кнопке

  const logOutHandler = () => dispatch(resetUserData());

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
            <Link to={routes.MAIN}>Главная <br />(о фестивале)</Link>
            {/* <Link to={routes.POSTS}>Posts Page</Link> */}
            {/* <Link to={`${routes.POSTS}/23131`} state={'test state'}>
              One post Page
            </Link> */}
            <Link to={routes.PRODUCTS}>Номинации</Link>
            <Link to={routes.COURSE}>Курсы</Link>
            <Link to={routes.USERS}>Пользователи</Link>
            <Link to={`${routes.USERS}/2`} state={'test state'}>
              Страница одного <br /> пользователя
            </Link>
            {/* {email && <span>{email}</span>}
            {token ? (
              <button onClick={logOutHandler}>LogOut</button>) : (
              <Link to={routes.AUTH}>Auth page</Link>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

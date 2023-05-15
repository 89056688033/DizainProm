import React, { useEffect } from 'react';
import s from '../UserPage/UserPage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../store/users/effects';
import {
  getUserByIdSelector,
  getUserByIdIsLoading,
  getUserByIdIsError,
  getUserByIdIsSuccess,
} from '../../store/users/selectors copy';
import { useToggle } from '../../utils/hooks/useToggle';

export const UserPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(getUserByIdSelector);
  const isSuccess = useSelector(getUserByIdIsSuccess);
  const isError = useSelector(getUserByIdIsError);
  const isLoading = useSelector(getUserByIdIsLoading);
  const { isVisible, open, close, toggle } = useToggle(false);
  // хук последнее занятие и для постов статусы саксесс эрор

  useEffect(() => {
    if (params.id) {
      dispatch(getUserById(params.id));
    }
  }, []);
  // для постов аксиос

  return (
    <>
    <div className={s.userList}>
      <button className={s.myBtn} onClick={toggle}>Посмотреть информацию о пользователе и закрыть</button>
      <button className={s.myBtn} onClick={open}>Посмотреть информацию о пользователе</button>
      <button className={s.myBtn} onClick={close}>ЗАКРЫТЬ</button>
      {isVisible && (
        <>
          {isError && <span>Error</span>}
          {isSuccess && user && (
            <div>
              <span className={s.text}>{`Я участник номер - ${params.id ?? ''} `}</span>
              <span className={s.text}>{user.name}</span>
              <span className={s.text}>{user.username}</span>
              <span className={s.text}>{user.email}</span>
              <span className={s.text}>{user.address.city}</span>
            </div>
            // для постов аксиос Hi i am post number - ${params.id ?? ''}
          )}
          {isLoading && <span>Loading</span>}
        </>
      )}
      </div>
    </>
  );
};

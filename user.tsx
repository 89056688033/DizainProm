import React, { useEffect, useRef } from 'react';
import { UserCard } from './src/Components/Commons/Users';
import styles from './UsersPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './src/store/users/effects';
import { getUserListIsError, getUserListSelector, getUserListIsSuccess, getUserListIsLoading } from './src/store/users/selectors copy';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  // ref scroll
  const users = useSelector(getUserListSelector);
  const isSuccess = useSelector(getUserListIsSuccess);
  const isError = useSelector(getUserListIsError);
  const isLoading = useSelector(getUserListIsLoading);

  const scrollUpHandler = () => {
    if (ref.current) {
      ref.current.scroll(0, 0);
    }
  };

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  // api axious

  return (
    <div className={styles.userList} ref={ref}>
      <button className={styles.scrollButton} onClick={scrollUpHandler}>
        Scroll up
      </button>
      {isSuccess &&
         users.length > 0 &&
         users.map(({ name, username, id, email }) => <UserCard key={id} name={name} email={email} username={username} id={id} />)}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
    // рисуем карточки если прошел селектор через мап кейс когда тру и лоадинг и эрор
  );
};

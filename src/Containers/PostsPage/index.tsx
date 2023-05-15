import React, { useEffect, useRef } from 'react';
import { PostCard } from '../../Components/Posts/PostCard';
import styles from './PostsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPostList } from '../../store/posts/effects';
import {
  getPostListIsError,
  getPostListIsLoading,
  getPostListIsSuccess,
  getPostListSelector,
} from '../../store/posts/selectors';

export const PostsPage = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  // ref scroll
  const posts = useSelector(getPostListSelector);
  const isSuccess = useSelector(getPostListIsSuccess);
  const isError = useSelector(getPostListIsError);
  const isLoading = useSelector(getPostListIsLoading);

  const scrollUpHandler = () => {
    if (ref.current) {
      ref.current.scroll(0, 0);
    }
  };

  useEffect(() => {
    dispatch(getPostList());
  }, []);
  // api axious

  return (
    <div className={styles.postList} ref={ref}>
      <button className={styles.scrollButton} onClick={scrollUpHandler}>
        Scroll up
      </button>
      {isSuccess &&
        posts.length > 0 &&
        posts.map(({ title, id, body }) => <PostCard key={id} title={title} body={body} id={id} />)}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
    // рисуем карточки если прошел селектор через мап кейс когда тру и лоадинг и эрор
  );
};

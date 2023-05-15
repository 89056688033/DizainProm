import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../store/posts/effects';
import {
  getPostByIdIsError,
  getPostByIdIsLoading,
  getPostByIdIsSuccess,
  getPostByIdSelector,
} from '../../store/posts/selectors';
import { useToggle } from '../../utils/hooks/useToggle';

export const PostPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector(getPostByIdSelector);
  const isSuccess = useSelector(getPostByIdIsSuccess);
  const isError = useSelector(getPostByIdIsError);
  const isLoading = useSelector(getPostByIdIsLoading);
  const { isVisible, open, close, toggle } = useToggle(false);
  // хук последнее занятие и для постов статусы саксесс эрор

  useEffect(() => {
    if (params.id) {
      dispatch(getPostById(params.id));
    }
  }, []);
  // для постов аксиос

  return (
    <>
      <button onClick={toggle}>TOGGLE</button>
      <button onClick={open}>OPEN</button>
      <button onClick={close}>CLOSE</button>
      {isVisible && (
        <>
          {isError && <span>Error</span>}
          {isSuccess && post && (
            <div>
              <span>{`Hi i am post number - ${params.id ?? ''} `}</span>
              <span>{post.title}</span>
              <span>{post.body}</span>
            </div>
            // для постов аксиос Hi i am post number - ${params.id ?? ''}
          )}
          {isLoading && <span>Loading</span>}
        </>
      )}
    </>
  );
};

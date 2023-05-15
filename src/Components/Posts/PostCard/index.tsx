import React from 'react';
import styles from './PostCard.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

interface TProps {
  title: string;
  id: number;
  body: string;
}

export const PostCard = ({ title, body, id }: TProps) => {
  return (
    <Link className={styles.cardWrapper} to={`${routes.POSTS}/${id}`}>
      <span className={styles.label}>{title}</span>
      <p className={styles.content}>{body}</p>
    </Link>
    //  для аксиос постс to={`${routes.POSTS}/${id}`}
  );
};

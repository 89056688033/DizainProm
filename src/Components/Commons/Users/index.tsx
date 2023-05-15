import React from 'react';
import styles from './UsersCard.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

interface TProps {
  name: string;
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  }
}

export const UserCard = ({ name, username, id, email, address }: TProps) => {
  return (
    <Link className={styles.cardWrapper} to={`${routes.USERS}/${id}`}>
      <span className={styles.label}>{name}</span>
      <p className={styles.content}>{username}</p>
      <p className={styles.content}>{email}</p>
      <p className={styles.content}>{address.city}</p>
    </Link>
    //  для аксиос постс to={`${routes.POSTS}/${id}`}
  );
};

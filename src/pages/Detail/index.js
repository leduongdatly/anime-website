import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeDetail from '~/components/AnimeDetail';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={cx('wrapper')}>
      <AnimeDetail />
    </div>
  );
};

export default Detail;

import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeWatch from '~/components/AnimeWatch';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

const Watch = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper')}>
        <AnimeWatch />
      </div>
    </div>
  );
};

export default Watch;

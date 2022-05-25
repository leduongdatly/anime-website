import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFoundAnime.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NotFoundAnime = () => {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Không tìm thấy tập phim nào cho bộ anime này</h3>
      <span>
        Trở lại{' '}
        <Link className={cx('navigate')} to='/'>
          Trang chủ
        </Link>
      </span>
    </div>
  );
};

export default NotFoundAnime;

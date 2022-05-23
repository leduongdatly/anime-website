import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SidebarItem = ({ result }) => {
  return (
    <Link to={`/anime/${result.id}`} className={cx('wrapper')}>
      <img className={cx('avatar')} src={result.cover_image} alt={result.titles.en} />
      <div className={cx('detail')}>
        <h4 className={cx('name')}>{result.titles.en || result.titles.jp}</h4>
        <p className={cx('desc')}>{result.descriptions.en || result.descriptions.jp}</p>
        <p className={cx('score')}>Score: {result.score} / 100</p>
      </div>
    </Link>
  );
};

export default SidebarItem;

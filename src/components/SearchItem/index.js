import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SearchItem = ({ result }) => {
  return (
    <Link to={`/anime/${result.id}`} className={cx('wrapper')}>
      <img className={cx('avatar')} src={result.cover_image} alt={result.titles.en} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>{result.titles.en}</h4>
        <span className={cx('detail')}>{result.descriptions.en}</span>
        <span className={cx('episode')}>{result.episodes_count}</span>
      </div>
    </Link>
  );
};

export default SearchItem;

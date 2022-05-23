import React from 'react';
import classNames from 'classnames/bind';
import styles from './AnimeCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const AnimeCard = ({ result }) => {
  return (
    <Link to={`/anime/${result.id}`} className={cx('wrapper')}>
      <img className={cx('img')} src={result.cover_image} alt={result.titles.en || result.titles.jp} />
      <div className={cx('detail')}>
        <h4 className={cx('name')}>{result.titles.en || result.titles.jp}</h4>
        <p className={cx('episode')}>episode: {result.episodes_count}</p>
      </div>
    </Link>
  );
};

export default AnimeCard;

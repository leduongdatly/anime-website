import React from 'react';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

const Detail = ({ item }) => {
  const format = (data) => {
    let result = null;
    if (data === 0) {
      result = 'TV';
    }

    if (data === 1) {
      result = 'TV Short';
    }

    if (data === 2) {
      result = 'Movie';
    }

    if (data === 3) {
      result = 'Special';
    }

    if (data === 4) {
      result = 'OVA';
    }

    if (data === 5) {
      result = 'ONA';
    }

    if (data === 6) {
      result = 'Music';
    }

    return result;
  };

  const season = (data) => {
    let result = null;
    if (data === 0) {
      result = 'Winter';
    }

    if (data === 1) {
      result = 'Spring';
    }

    if (data === 2) {
      result = 'Summer';
    }

    if (data === 3) {
      result = 'Fall';
    }

    if (data === 4) {
      result = 'Unknow';
    }

    return result;
  };

  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>{item.titles.en || item.titles.jp}</h3>
      <p className={cx('format')}>
        Anime type: <span className={cx('color')}>{format(item.format)}</span>
      </p>
      <p className={cx('format')}>
        Season: <span className={cx('color')}>{season(item.season_period)}</span>
      </p>
      <p className={cx('format')}>
        year: <span className={cx('color')}>{item.season_year}</span>
      </p>
      <p className={cx('format')}>
        Episodes: <span className={cx('color')}>{item.episodes_count}</span>
      </p>
      <p className={cx('format')}>
        score: <span className={cx('color')}>{item.score} / 100</span>
      </p>
    </div>
  );
};

export default Detail;

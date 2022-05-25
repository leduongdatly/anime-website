import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RecommendItem.module.scss';
import animeApi from '~/api/animeApi';
import Loading from '~/components/Loading';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const RecommendItem = ({ id }) => {
  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getRecommend = async () => {
      try {
        const response = await animeApi.getById(id);
        if (response.status_code === 200) {
          setItem(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getRecommend();
  }, []);

  if (loading) {
    return;
  }

  return (
    <Link to={`/detail/${item.id}`} className={cx('wrapper')}>
      <img className={cx('avatar')} src={item.cover_image} alt={item.titles.en} />
      <div className={cx('detail')}>
        <h4 className={cx('name')}>{item.titles.en || item.titles.jp}</h4>
        <p className={cx('desc')}>{item.descriptions.en || item.descriptions.jp}</p>
        <p className={cx('score')}>Score: {item.score} / 100</p>
      </div>
    </Link>
  );
};

export default RecommendItem;

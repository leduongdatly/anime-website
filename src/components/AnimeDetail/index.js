import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AnimeDetail.module.scss';
import Image from './components/Image';
import Detail from './components/Detail';
import { useParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import Loading from '../Loading';

const cx = classNames.bind(styles);

const AnimeDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getAnime = async () => {
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

    getAnime();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('row')}>
        <div className={cx('col l-6')}>
          <Image src={item.cover_image} alt={item.titles.en || item.titles.jp} id={id} />
        </div>
        <div className={cx('col l-6')}>
          <Detail item={item} />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;

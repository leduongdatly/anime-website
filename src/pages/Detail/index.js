import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import AnimeDetail from '~/components/AnimeDetail';
import Helmet from '~/components/Helmet';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

const Detail = () => {
  const { id } = useParams();

  const [name, setName] = useState('');

  useEffect(() => {
    const getById = async () => {
      try {
        const response = await animeApi.getById(id);
        setName(response.data.titles.en || response.data.titles.jp);
      } catch (error) {
        console.log(error);
      }
    };

    getById();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, [id]);

  return (
    <Helmet title={name}>
      <div className={cx('wrapper')}>
        <AnimeDetail />
      </div>
    </Helmet>
  );
};

export default Detail;

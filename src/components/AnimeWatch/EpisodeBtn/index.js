import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EpisodeBtn.module.scss';
import { Link, useParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import ShowEpisodeBtn from './ShowEpisodeBtn';

const cx = classNames.bind(styles);

const EpisodeBtn = () => {
  const { id, page } = useParams();

  const firstPage = 1;
  const fromTo = [];
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [lastPage, setLastPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getAllEp = async () => {
      try {
        const params = {
          page: firstPage,
          per_page: 100,
        };
        const response = await animeApi.getAllEpisode(id, params);
        if (response.status_code === 200) {
          // console.log(response);
          setLastPage(response.data.last_page);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllEp();
  }, []);

  for (var i = firstPage; i <= lastPage; i++) {
    fromTo.push(i);
  }

  if (loading) {
    return;
  }

  const showFromTo = () => {
    var result = null;
    result = fromTo.map((item) => {
      return (
        <button
          onClick={() => setCurrentPage(item)}
          key={item}
          className={cx('from-to', currentPage === item && 'active')}
        >
          {item > 1 ? `${(item - 1) * 100 + 1} - ${item * 100}` : `${item} - ${item * 100}`}
        </button>
      );
    });
    return result;
  };

  return (
    <div className={cx('wrapper')}>
      <div>{showFromTo()}</div>
      <ShowEpisodeBtn page={currentPage} />
    </div>
  );
};

export default EpisodeBtn;

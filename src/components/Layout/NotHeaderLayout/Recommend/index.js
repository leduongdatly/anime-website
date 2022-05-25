import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Recommend.module.scss';
import { useParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import RecommendItem from './RecommendItem';
import Sidebar from '../../DefaultLayout/Sidebar';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

const Recommend = () => {
  const { id } = useParams();

  const [recommend, setRecommend] = useState([]);
  const [warnning, setWarnning] = useState('');
  const [loading, setLoading] = useState(true);

  const currentTime = new Date();
  const year = currentTime.getFullYear();

  useEffect(() => {
    const getRecommend = async () => {
      try {
        const response = await animeApi.getById(id);
        if (response.status_code === 200) {
          setRecommend(response.data.recommendations ? response.data.recommendations : []);
          setLoading(false);
        } else {
          setWarnning('Loi khi tai du lieu');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getRecommend();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!loading && recommend.length === 0) {
    return <Sidebar count={5} year={year} />;
  }

  if (!loading && recommend.length > 0) {
    return (
      <div className={cx('wrapper')}>
        {!loading && <h3 className={cx('title')}>Recommend</h3>}
        {recommend.map((id) => {
          return (
            <div key={id}>
              <RecommendItem id={id} key={id} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Recommend;

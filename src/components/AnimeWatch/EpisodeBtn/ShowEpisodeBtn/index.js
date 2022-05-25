import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ShowEpisodeBtn.module.scss';
import animeApi from '~/api/animeApi';
import { Link, useParams } from 'react-router-dom';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

const ShowEpisodeBtn = ({ page }) => {
  const { id, ep } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     console.log('first run');
  //     const getAllEp = async () => {
  //       try {
  //         // const params = {
  //         //   page: page,
  //         //   per_page: 100,
  //         // };
  //         const response = await animeApi.getAllEpisode(id);
  //         if (response.status_code === 200) {
  //           // console.log(response);
  //           setEpisodes(response.data.documents);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getAllEp();
  //   }, []);

  useEffect(() => {
    setLoading(true);

    const getAllEp = async () => {
      try {
        const params = {
          page: Number(page),
          per_page: 100,
        };
        const response = await animeApi.getAllEpisode(id, params);
        if (response.status_code === 200) {
          setEpisodes(response.data.documents);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllEp();
  }, [page]);

  const showEpBtn = () => {
    var result = null;
    result = episodes.map((item) => {
      return (
        <Link
          to={`/watch/${id}/${page}/episode/${item.number}`}
          key={item.number}
          className={cx('ep-btn', Number(ep) === Number(item.number) && 'active')}
        >
          {item > 1 ? Number(item.number) + 100 : item.number}
        </Link>
      );
    });
    return result;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={cx('wrapper')}>
      <div>{showEpBtn()}</div>
    </div>
  );
};

export default ShowEpisodeBtn;

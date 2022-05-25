import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '~/components/Loading';
import VideoPlayer from '~/components/VideoPlayer';
import styles from './AnimeWatchEp.module.scss';

const cx = classNames.bind(styles);

const AnimeWatchEp = ({ anime, episodes }) => {
  const { ep } = useParams();

  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (episodes.documents) {
      const data = episodes.documents.find((item) => item.number === Number(ep));
      setItem(data);
      setLoading(false);
    }
  }, [episodes]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        <VideoPlayer video={item && item.video} poster={anime.banner_image} />
      </div>
      <h1 className={cx('title')}>{anime.titles.en || anime.titles.jp}</h1>
      <div className={cx('day-released')}>Season Year: {anime.season_year}</div>
      {/* <div className={cx('gernes')}>
        Genres: <span> </span>
        {anime.genres.map((item, index) => {
          return (
            <div key={index} className={cx('gernes-item')}>
              {item}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default AnimeWatchEp;

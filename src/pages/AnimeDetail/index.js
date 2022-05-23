import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AnimeDetail.module.scss';
import { useParams } from 'react-router-dom';
import VideoPlayer from '~/components/VideoPlayer';

const cx = classNames.bind(styles);

const AnimeDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={cx('wrapper')}>
      <VideoPlayer />
    </div>
  );
};

export default AnimeDetail;

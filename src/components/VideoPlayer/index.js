import React from 'react';
import classNames from 'classnames/bind';
import styles from './VideoPlayer.module.scss';

const cx = classNames.bind(styles);

const VideoPlayer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>asd</div>
      <h1 className={cx('title')}>asd</h1>
      <div className={cx('day-released')}>asd</div>
      <div className={cx('gernes')}>
        <div className={cx('gernes-item')}>asd</div>
      </div>
    </div>
  );
};

export default VideoPlayer;

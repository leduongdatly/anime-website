import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col l-12')}>
            <div className={cx('snippet')} data-title='.dot-elastic'>
              <div className={cx('stage')}>
                <div className={cx('dot-elastic')}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

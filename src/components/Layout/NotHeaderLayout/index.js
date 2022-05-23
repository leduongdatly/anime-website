import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotHeaderLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

const NotHeaderLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={cx('wrapper')}>
        <div className={cx('grid wide')}>
          <div className={cx('row')}>
            <div className={cx('col l-8')}>
              <div className={cx('container')}>{children}</div>
            </div>
            <div className={cx('col l-4')}>
              {/* <Sidebar count={5} year={year} />
              <Sidebar count={5} lastYear={year - 1} className='mt-40' /> */}
              recommend
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotHeaderLayout;

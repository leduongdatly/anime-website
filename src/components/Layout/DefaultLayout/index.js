import classNames from 'classnames/bind';
import React from 'react';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import ScrollTop from '~/components/ScrollTop';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div>
      <Header />
      <ScrollTop />
      <div className={cx('wrapper')}>
        <div className={cx('grid wide')}>
          <div className={cx('row')}>
            <div className={cx('col l-8')}>
              <div className={cx('container')}>{children}</div>
            </div>
            <div className={cx('col l-4')}>
              <Sidebar count={5} year={year} />
              <Sidebar count={5} lastYear={year - 1} className='mt-40' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

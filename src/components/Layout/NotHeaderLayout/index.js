import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotHeaderLayout.module.scss';
import Header from '../components/Header';
import Recommend from './Recommend';
import ScrollTop from '~/components/ScrollTop';

const cx = classNames.bind(styles);

const NotHeaderLayout = ({ children }) => {
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
              {/* <Sidebar count={5} year={year} />
              <Sidebar count={5} lastYear={year - 1} className='mt-40' /> */}
              <Recommend />
            </div>
          </div>
          <div className={cx('comment')}>comment</div>
        </div>
      </div>
    </div>
  );
};

export default NotHeaderLayout;

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollTop.module.scss';

const cx = classNames.bind(styles);

const ScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ongoToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={cx('wrapper')}>
      {showBtn && (
        <div className={cx('button')} onClick={ongoToTop}>
          Top
        </div>
      )}
    </div>
  );
};

export default ScrollTop;

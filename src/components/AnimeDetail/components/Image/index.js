import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import Button from '~/components/Button';
import animeApi from '~/api/animeApi';

const cx = classNames.bind(styles);

const Image = ({ src, alt, id }) => {
  const [currEp, setCurrEp] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(false);

    const getAllEp = async () => {
      try {
        const response = await animeApi.getAllEpisode(id);
        if (response.status_code === 200) {
          setCheck(true);
        } else {
          setCheck(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllEp();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <img src={src} alt={alt} className={cx('img')} />
      <div className={cx('control')}>
        <Button
          to={check ? `/watch/${id}/${currPage}/episode/${currEp}` : `/watch/not-found`}
          primary
          className={cx('button')}
        >
          Xem anime
        </Button>
      </div>
    </div>
  );
};

export default Image;

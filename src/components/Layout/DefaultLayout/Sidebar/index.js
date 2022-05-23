import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import animeApi from '~/api/animeApi';
import SidebarItem from '~/components/SidebarItem';
import { getAnimes } from '~/utils/anime';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = ({ count, year, lastYear, className }) => {
  const [animeResult, setAnimeResult] = useState([]);

  // const count = 5;

  // const currentTime = new Date();
  // const year = currentTime.getFullYear();

  useEffect(() => {
    const getAllAnime = async () => {
      try {
        const response = await animeApi.getByYear(year || lastYear);
        setAnimeResult(response.data.documents === undefined ? [] : response.data.documents);
      } catch (error) {
        console.log(error);
      }
    };

    getAllAnime();
  }, []);

  const classes = cx('wrapper', {
    [className]: className,
  });

  return (
    <div className={classes}>
      <h3 className={cx('title')}>
        Top {count} anime of {year || lastYear}
      </h3>
      <div className={cx('sidebar-list')}>
        {getAnimes(animeResult, count).map((item) => {
          return <SidebarItem key={item.id} result={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;

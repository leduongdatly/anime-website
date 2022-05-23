import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import AnimeCard from '~/components/AnimeCard/AnimeCard';
import AnimeFilter from '~/components/AnimeFilter';
import Loading from '~/components/Loading';
import Pagination from '~/components/Pagination/Pagination';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  const params = useParams();

  const [animeResult, setAnimeResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(params.pagee ? Number(params.pagee) : 1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const page = 1;

  useEffect(() => {
    setCurrentPage(params.pagee ? Number(params.pagee) : 1);
    window.scrollTo(0, 0);
  }, [params.pagee]);

  useEffect(() => {
    setLoading(true);

    const getAnimes = async () => {
      try {
        const params = {
          page: currentPage,
          per_page: 16,
        };
        const response = await animeApi.getAll(params);
        if (response.status_code === 200) {
          setTotalPage(response.data.last_page);
          setAnimeResult(response.data.documents || []);
          setLoading(false);
        } else {
          alert('Có lỗi trong quá trình tải dữ liệu');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAnimes();
  }, [currentPage]);

  // const onPassData = async (data) => {
  //   data.status = data.status === 'false' ? false : Number(data.status);
  //   data.year = data.year === 'false' ? false : Number(data.year);
  //   data.season = data.season === 'false' ? false : Number(data.season);

  //   try {
  //     const params = {
  //       page: currentPage,
  //       per_page: 16,
  //     };
  //     const response = await animeApi.getbyFilter(params, data.status, data.year, data.season, data.gernes);
  //     if (response.status_code === 200) {
  //       setTotalPage(response.data.last_page);
  //       setAnimeResult(response.data.documents || []);
  //     } else {
  //       alert('Có lỗi trong quá trình tải dữ liệu');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={cx('wrapper')}>
      {/* <AnimeFilter onPassData={onPassData} /> */}
      <h3 className={cx('info')}>
        Trang {currentPage} / {totalPage}
      </h3>
      <div className={cx('grid')}>
        <div className={cx('row')}>
          {animeResult.map((result, index) => {
            return (
              <div className={cx('col l-3')} key={result.id}>
                <AnimeCard result={result} />
              </div>
            );
          })}
        </div>
        <Pagination page={page} totalPage={totalPage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;

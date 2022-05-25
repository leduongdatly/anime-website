import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import AnimeCard from '~/components/AnimeCard/AnimeCard';
import Helmet from '~/components/Helmet';
import Loading from '~/components/Loading';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const title = searchParams.get('keyword');

  useEffect(() => {
    setLoading(true);

    const getSearchResult = async () => {
      try {
        const response = await animeApi.getByName(title);
        if (response.status_code === 200) {
          setSearchResult(response.data.documents);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getSearchResult();
  }, []);

  useEffect(() => {
    setLoading(true);
    setSearchResult([]);

    const getSearchResult = async () => {
      try {
        const response = await animeApi.getByName(title);
        if (response.status_code === 200) {
          setSearchResult(response.data.documents);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getSearchResult();
  }, [title]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Helmet title={`Kết quả tìm kiếm cho ${title}`}>
      <div className={cx('wrapper')}>
        <div className={cx('grid')}>
          {/* <AnimeFilter onPassData={onPassData} /> */}
          <h3 className={cx('found')}>Tìm thấy {searchResult.length} kết quả</h3>
          <div className={cx('row')}>
            {searchResult.map((result) => {
              return (
                <div className={cx('col l-3')} key={result.id}>
                  <AnimeCard result={result} />
                </div>
              );
            })}
          </div>
          {/* <Pagination page={page} totalPage={totalPage} currentPage={currentPage} /> */}
        </div>
      </div>
    </Helmet>
  );
};

export default Search;

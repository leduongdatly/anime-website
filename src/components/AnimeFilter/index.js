import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AnimeFilter.module.scss';
import animeApi from '~/api/animeApi';
import HeadLessTippy from '@tippyjs/react/headless';
import Button from '../Button';

const cx = classNames.bind(styles);

const AnimeFilter = ({ onPassData }) => {
  const [gernes, setGernes] = useState([]);
  const [status, setStatus] = useState(false);
  const [year, setYear] = useState(false);
  const [season, setSeason] = useState(false);
  const [selectedGernes, setSelectedGernes] = useState([]);
  const [showResult, setShowResult] = useState(false);

  var CurrentYear = new Date().getFullYear();

  const handleAddGernes = (e) => {
    var target = e.target;
    var value = target.value;
    var checked = target.checked;

    checked
      ? setSelectedGernes((prev) => [...prev, value])
      : setSelectedGernes(selectedGernes.filter((e) => e !== value));
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    const getGernes = async () => {
      try {
        const response = await animeApi.getGenres();
        setGernes(response.data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    getGernes();
  }, []);

  const showYear = () => {
    let result = [];
    for (var i = 0; i <= 10; ++i) {
      result = [...result, CurrentYear - i];
    }
    return result;
  };

  const handleData = () => {
    const data = {
      status: status,
      year: year,
      gernes: selectedGernes,
      season: season,
    };

    onPassData(data);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-list')}>
        <div className={cx('row')}>
          <div className={cx('col l-2-4')}>
            <div className={cx('search-item')}>
              <h5 className={cx('title')}>Status</h5>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value={false}>Choose</option>
                <option value={0}>Finished</option>
                <option value={1}>Releasing</option>
                <option value={2}>Not released yet</option>
                <option value={3}>Cancelled</option>
              </select>
            </div>
          </div>
          <HeadLessTippy
            interactive
            visible={showResult}
            render={(attrs) => (
              <div className={cx('gernes')} tabIndex='-1' {...attrs}>
                {gernes.map((item, index) => {
                  return (
                    <label htmlFor={item} key={index} className={cx('gernes-item')}>
                      <input id={item} type='checkbox' name='size' value={item} onChange={(e) => handleAddGernes(e)} />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            )}
            onClickOutside={handleHideResult}
          >
            <div className={cx('col l-2-4')}>
              <div className={cx('search-item')}>
                <h5 className={cx('title')}>Gernes</h5>
                <input
                  className={cx('duong')}
                  type='text'
                  defaultValue={selectedGernes}
                  onClick={() => setShowResult(true)}
                />
              </div>
            </div>
          </HeadLessTippy>
          <div className={cx('col l-2-4')}>
            <div className={cx('search-item')}>
              <h5 className={cx('title')}>Year</h5>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value={false}>Choose</option>
                {showYear().map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={cx('col l-2-4')}>
            <div className={cx('search-item')}>
              <h5 className={cx('title')}>Season</h5>
              <select value={season} onChange={(e) => setSeason(e.target.value)}>
                <option value={false}>Choose</option>
                <option value={0}>Winter</option>
                <option value={1}>Spring</option>
                <option value={2}>Summer</option>
                <option value={3}>Fall</option>
                <option value={4}>Unknow</option>
              </select>
            </div>
          </div>
          <div className={cx('col l-2-4')}>
            <div className={cx('search-item')}>
              <h5 className={cx('title')}>...</h5>
              <Button primary onClick={handleData}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeFilter;

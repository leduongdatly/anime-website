import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadLessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const onNavigateToSearch = () => {
    if (!searchValue.trim()) {
      alert('Moi dien');
    } else {
      setShowResult(false);
      navigate({
        pathname: '/search',
        search: `?${createSearchParams({
          keyword: searchValue,
        })}`,
      });
    }
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    const fetchAnimeByName = async () => {
      try {
        const response = await animeApi.getByName(debounced);
        setSearchResult(response.data.documents === undefined ? [] : response.data.documents);
        setLoading(false);
      } catch (err) {
        console.log('Error when fetch api: ', err);
      }
    };

    fetchAnimeByName();
  }, [debounced]);

  return (
    <HeadLessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            {searchResult.map((result) => {
              return <SearchItem key={result.id} result={result} />;
            })}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          type='text'
          placeholder='search for anime name'
          spellCheck={false}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {/* clear btn */}
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* loading */}
        {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
        {/* search btn */}
        <button onClick={onNavigateToSearch} className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadLessTippy>
  );
};

export default Search;

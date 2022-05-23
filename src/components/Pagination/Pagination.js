import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Pagination = ({ page, totalPage, currentPage }) => {
  const pageNumbers = [];
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(null);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(null);

  for (let i = page; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const handleNextBtn = () => {
    if (Number(currentPage) > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    if (Number(currentPage) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const count = currentPage % 5;
  const max = count === 0 ? currentPage : currentPage - count + pageNumberLimit;
  const min = count === 0 ? currentPage - pageNumberLimit : currentPage - count;

  useEffect(() => {
    if (Number(currentPage) > maxPageNumberLimit) {
      setMaxPageNumberLimit(max);
      setMinPageNumberLimit(count === 0 ? currentPage - 5 : currentPage - count);
    }
  }, []);

  return (
    <nav>
      <ul className={cx('pagination')}>
        {maxPageNumberLimit > 5 && (
          <li className={cx('page-item')}>
            <Link
              onClick={handlePrevBtn}
              to={`/page/${currentPage - 1 === 0 ? 1 : currentPage - 1}`}
              className={cx('page-link')}
            >
              Prev
            </Link>
          </li>
        )}
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li key={number} className={cx('page-item')}>
                <Link to={`/page/${number}`} className={cx('page-link', currentPage === number && 'active')}>
                  {number}
                </Link>
              </li>
            );
          } else {
            return null;
          }
        })}
        <li className={cx('page-item')}>
          <Link onClick={handleNextBtn} to={`/page/${currentPage + 1}`} className={cx('page-link')}>
            next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

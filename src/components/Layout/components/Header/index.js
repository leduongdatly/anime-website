import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx(' grid wide')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <Link to='/'>
              <img
                src='https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png'
                alt='logo'
              />
            </Link>
          </div>

          {/* Search */}
          <Search />

          <div className={cx('action')}>
            <Button primary>Log in</Button>
            <Button primary>Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

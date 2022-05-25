import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import animeApi from '~/api/animeApi';
import Loading from '~/components/Loading';
import styles from './AnimeWatch.module.scss';
import AnimeWatchEp from './AnimeWatchEp';
import EpisodeBtn from './EpisodeBtn';

const cx = classNames.bind(styles);

const AnimeWatch = () => {
  const { id, page } = useParams();

  const [anime, setAnime] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getAllEp = async () => {
      try {
        const params = {
          page: page,
          per_page: 1000,
        };
        const response = await animeApi.getAllEpisode(id, params);
        if (response.status_code === 200) {
          setEpisodes(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAnime = async () => {
      try {
        const response = await animeApi.getById(id);
        if (response.status_code === 200) {
          setAnime(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllEp();
    getAnime();
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={cx('wrapper')}>
      <AnimeWatchEp anime={anime} episodes={episodes} />
      <EpisodeBtn />
    </div>
  );
};

export default AnimeWatch;

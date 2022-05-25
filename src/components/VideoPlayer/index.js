import React from 'react';
import classNames from 'classnames/bind';
import styles from './VideoPlayer.module.scss';
import '@vime/core/themes/default.css';
import {
  ControlGroup,
  Controls,
  ControlSpacer,
  CurrentTime,
  EndTime,
  TimeProgress,
  FullscreenControl,
  PipControl,
  PlaybackControl,
  Player,
  ScrubberControl,
  Ui,
  Video,
  VolumeControl,
} from '@vime/react';

const cx = classNames.bind(styles);

const VideoPlayer = ({ video, poster }) => {
  const hlsConfig = {
    // ...
  };

  return (
    <div className={cx('wrapper')}>
      <Player theme='default' style={{ '--vm-player-theme': '#e86c8b' }}>
        <Video crossOrigin poster={poster}>
          <source data-src={video} type='video/mp4' />
          {/* <track
            default
            kind='subtitles'
            src='https://media.vimejs.com/subs/english.vtt'
            srcLang='en'
            label='English'
          /> */}
        </Video>

        {/* <DefaultUi></DefaultUi> */}
        <Ui>
          <Controls fullWidth>
            <ControlGroup>
              <ScrubberControl />
            </ControlGroup>

            <ControlGroup space='top'>
              <PlaybackControl />
              <VolumeControl />
              <TimeProgress separator='/' />;
              {/* <CurrentTime />
            <EndTime /> */}
              <ControlSpacer />
              <PipControl />
              <FullscreenControl />
            </ControlGroup>
          </Controls>
        </Ui>
      </Player>
    </div>
  );
};

export default VideoPlayer;

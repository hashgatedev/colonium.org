import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import Linkify from 'react-linkify';

import styles from './MediaList.module.css';
import Spinner from "../Spinner/Spinner";
import config from "../../config";

const SliderComponent = () => {

  const channelId = 'UCPWdhqeykTob6bgzEhjnKKg';

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectedVideoDetail, setSelectedVideoDetail] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);


  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const openModal = (video) => {
    fetchVideoDetails(video);
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedVideoDetail(null);
    setIsVideoLoaded(false);
    setShowMore(false);
    setModalOpen(false);
  };

  // Fetch the latest videos from the YouTube API
  const fetchVideos = async () => {
    try {
      const API_BASE = config.API_BASE_URL;
      const response = await fetch(
        `${API_BASE}/media/list`
      );
      const data = await response.json();
      setVideos(data.result.items);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }
  };

  const fetchVideoDetails = async (video) => {
    try {
      const API_BASE = config.API_BASE_URL;
      const response = await fetch(
        `${API_BASE}/media/info/${video.id.videoId}`
      );
      const data = await response.json();
      if (data && data.result && data.result.items && data.result.items.length > 0)
        setSelectedVideoDetail(data.result.items[0].snippet.description);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  // Render each video as a slide
  const renderSlides = () => {
    if (!videos || videos.length === 0) return <Spinner />;
    return videos.map((video) => (
      <div key={video.id.videoId} >
        <div className={styles.yb_slider}>
          <div className={styles.yb_img_container}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              onClick={() => openModal(video)}
              className={styles.ybs_img}
            />
            <div className={styles.play_icon}>
              <img src="/img/images/youtube_play.png" alt="play" />
            </div>
          </div>
          <p className={styles.ybs_title}>{video.snippet.title}</p>
        </div>
      </div>
    ));
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    autoSlidesToShow: true,
    variableWidth: true,
  };

  const youtubeOptions = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onPlayerReady = () => {
    setIsVideoLoaded(true);
  }

  const onShowMoreClick = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="bg">
      <div className="container">
        <div className="section-title text-center " >
          <span className={"sub-title " + styles.sub_title} >media</span>
        </div>

        <div className={styles.videos_emb}>
          <Slider {...sliderSettings}>
            {renderSlides()}
          </Slider>

        </div>
        <Modal show={isModalOpen && selectedVideo} onHide={closeModal} centered size="lg">
          <Modal.Body>
            {selectedVideo != null &&
              <div>
                <div className={styles.ybv_spinner}>
                  <Spinner loading={!isVideoLoaded} />
                </div>
                <YouTube videoId={selectedVideo.id.videoId} opts={youtubeOptions} onReady={onPlayerReady} onEnd={closeModal} onError={closeModal} />
                <div>
                  <Linkify><div className={styles.yb_info}>{showMore ? selectedVideoDetail : selectedVideo.snippet.description}</div></Linkify>
                  {selectedVideoDetail &&
                    <p className={styles.yb_show_more} onClick={onShowMoreClick}>Show {showMore ? "Less" : "More"}</p>
                  }
                </div>
                <a href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`} className={styles.yt_subscribe_btn} target="_blank" rel="noreferrer" >SUBSCRIBE</a>
              </div>
            }
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}
export default SliderComponent;
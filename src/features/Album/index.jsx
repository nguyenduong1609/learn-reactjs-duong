import React from 'react';
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Những Khoảnh lặng cuộc sống',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/2/3/d/823d9f0132e0d2cb77a5dc373b8e3d53.jpg',
    },
    {
      id: 2,
      name: 'Happy Mood',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/2/9/7/5297997aa546d156d0f7d80d278dd185.jpg',
    },
    {
      id: 3,
      name: 'K-pop Acoustic Relax',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/b/b/2/6bb2dec5c57c7487735d9663e6b40885.jpg',
    }
  ];

  return (
    <div>
      <h2> Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList}/>
    </div>
  );

};

export default AlbumFeature;
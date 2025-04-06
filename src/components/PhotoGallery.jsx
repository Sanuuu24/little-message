import React from 'react';
import PhotoCard from './PhotoCard';

function PhotoGallery({ photos }) {
  return (
    <div className="wattpad-gallery">
      {photos.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoGallery;
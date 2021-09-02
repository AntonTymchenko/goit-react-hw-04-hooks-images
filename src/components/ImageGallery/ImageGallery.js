import React, { useState } from "react";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import "./ImageGallery.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function ImageGallery({ onCLickImg, onBtnClick, error, status, imgCards }) {
  const [scrollStatus, setScrollStatus] = useState(false);

  function handleLoadMoreButton() {
    onBtnClick();
    setScrollStatus(true);
  }

  const changeStatusScrooll = (obj) => {
    onCLickImg(obj);
    setScrollStatus(false);
  };

  if (status === "idle") {
    return null;
  }
  if (status === "pending") {
    return (
      <div className="loader">
        <Loader
          type="Bars"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    );
  }
  if (status === "resolved") {
    return (
      <>
        <ul className="ImageGallery">
          {imgCards.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              alt={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={changeStatusScrooll}
              scrollStatus={scrollStatus}
            />
          ))}
        </ul>
        <LoadMoreButton handleLoadMoreButton={handleLoadMoreButton} />
      </>
    );
  }
  if (status === "rejected") {
    return <h2>{error.message}</h2>;
  }
}
export default ImageGallery;

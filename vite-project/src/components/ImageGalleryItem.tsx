import React from "react";
import { Image } from "../Image";
import "../styles.css";

interface ImageGalleryItemProps {
  image: Image;
  onClick: (url: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onClick,
}) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className="gallery-item" key={image.id} onClick={handleClick}>
      <img src={image.webformatURL} />
    </li>
  );
};

export default ImageGalleryItem;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import { Image } from "../Image";
import axios from "axios";
import Modal from "./Modal";
import "../styles.css";

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <ul className="gallery-container">
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onClick={openModal} />
        ))}
      </ul>
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGallery;

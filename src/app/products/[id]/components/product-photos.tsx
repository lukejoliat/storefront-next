"use client";

import { useState } from "react";
import { MainPhoto } from "./main-photo";
import { ProductGallery } from "./product-gallery";

export const ProductPhotos = ({ photos }: { photos: string[] }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>(photos[0]);

  const handleClick = (photo: string) => {
    setCurrentPhoto(photo);
  };
  return (
    <>
      <MainPhoto src={currentPhoto} />
      <ProductGallery photos={photos} handleClick={handleClick} />
    </>
  );
};

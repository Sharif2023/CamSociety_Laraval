export const getImagePath = (image) => {
    return image
      ? image.startsWith("http")
        ? image
        : `/PhotoSells/${image}`
      : '/defaultImagePath.jpg';
  };
  
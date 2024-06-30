import React from "react";

const ImageCard = ({ imgUrl, changeImage, bigImage }) => {
  const changeImageFunction = () => {
    if (bigImage !== imgUrl.image) {
      changeImage(imgUrl.image);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigImage === imgUrl.image ? "border-light-bg" : "border-transparent"
      }  cursor-pointer max-sm:flex-1`}
      onClick={changeImageFunction}
    >
      <div className="flex justify-center items-center bg-card bg-center sm:w-30 sm:h-30 rounded-xl max:sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="Image collection"
          // width={127}
          // height={127}
          className="object-cover w-20 h-20 p-1 rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageCard;

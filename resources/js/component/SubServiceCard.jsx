import React from "react";

const SubServiceCard = ({ imgUrl, changeDetail, bigImage }) => {
  const changeDetailFunction = () => {
    if (bigImage !== imgUrl.image) {
      changeDetail(imgUrl);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigImage.image === imgUrl.image
          ? "border-light-bg"
          : "border-transparent"
      }  cursor-pointer max-sm:flex-1`}
      onClick={changeDetailFunction}
    >
      <div className="flex justify-center flex-wrap items-center bg-center  sm:w-20 sm:h-20 rounded-xl max:sm:p-2">
        <img
          src={"/storage/" + imgUrl.image}
          alt="Image collection"
          className="object-cover rounded-lg w-[70px] h-[70px]"
        />
      </div>
    </div>
  );
};

export default SubServiceCard;

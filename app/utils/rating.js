import ReactStars from "react-stars";

const Rating = () => {
  const ratingChange = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChange}
      size={20}
      color1={"gray"}
      color2={"#e83249"}
      value={4}
    />
  );
};

export default Rating;

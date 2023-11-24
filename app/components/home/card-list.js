import CardRestaurant from "@/app/components/home/card";

const CardList = () => {
  return (
    <div className="container mt-3">
      <div className="row mb-3">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <CardRestaurant />
        </div>
      </div>
    </div>
  );
};
export default CardList;

import RestaurantHeader from "@/app/components/restaurantpage/restaurant-header";
import BookDate from "@/app/components/restaurantpage/book-date";
import RestaurantDetailsComponent from "@/app/components/restaurantpage/restaurant-details";

const RestaurantPage = () => {
  return (
    <div className="text-danger my-5">
      <RestaurantHeader />
      <div className="container d-flex justify-content-sm-between mt-4 flex-column flex-lg-row flex-column-reverse align-items-center align-items-lg-start">
        <RestaurantDetailsComponent />
        <BookDate />
      </div>
    </div>
  );
};

export default RestaurantPage;

import Rating from "@/app/utils/rating";
import { MdOutlineRateReview, MdRestaurant, MdMoney } from "react-icons/md";

export const RestaurantOverview = () => {
  return (
    <section className="text-end">
      <h5 className="pt-3">الرياض</h5>
      <hr />
      <div className="d-flex justify-content-center flex-column flex-md-row">
        {/*  rating*/}
        <div className="d-flex justify-content-end me-md-5 mt-md-3">
          <div>
            <MdOutlineRateReview className="review-icon" />
            <span className="me-2 mt-1">9</span>
            <span className="me-2 mt-1">تقييم</span>
          </div>
          <Rating />
        </div>
        {/*  food type price  */}
        <div className="d-flex justify-content-end mt-3 ms-md-4">
          <div>
            <MdRestaurant className="review-icon" />
            <span className="me-2 mt-1">سعودي</span>
          </div>
          <div>
            <MdMoney className="review-icon" />
            <span className="me-2 mt-2">من 100$ الي 200$</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <p className="text-end">
          مطعم البيك الشهير بالرياض يقدم اشهي الاكلات السعودية والمشويات
          والمقبلات والسلطات والمشروبات الساخنة والباردة والحلويات والمعجنات
          والمشروبات الغازية والعصائر الطبيعية والمثلجات والمشروبات الساخنة
          والباردة والحلويات
        </p>
      </div>
    </section>
  );
};

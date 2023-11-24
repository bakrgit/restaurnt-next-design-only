"use client";
import "../../style/card.css";
import Rating from "../../utils/rating";
import { BiSolidCity } from "react-icons/bi";
import Link from "next/link";
const CardRestaurant = () => {
  return (
    <Link href={"/restaurant/17"} style={{ textDecoration: "none" }}>
      <div className="card card-container mb-3">
        <img
          className="card-img-top mt-2"
          src="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">اسم المطعم</h5>
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <Rating />
              <p className="mx-1 mt-1 rate"> 4 تقييم</p>
            </div>
            <div className="d-flex mt-1 ms-3">
              <BiSolidCity className="rate me-1" />
              <p className="rate">cairo</p>
            </div>
          </div>

          <h6 className="text-center">محجوز ٣ ايام</h6>
        </div>
      </div>
    </Link>
  );
};
export default CardRestaurant;

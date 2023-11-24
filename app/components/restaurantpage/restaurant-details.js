"use client";
import { Tab, Tabs } from "react-bootstrap";
import "../../style/rest-details.css";
import { RestaurantOverview } from "@/app/components/restaurantpage/restaurant-overview";
import { RestaurantSlider } from "@/app/components/restaurantpage/restaurant-slider";
import { RestaurantMenu } from "@/app/components/restaurantpage/restaurant-menu";
const RestaurantDetailsComponent = () => {
  return (
    <div className="details-container mb-5">
      <Tabs defaultActiveKey="overview" id="tab-example" fill className="tabs">
        <Tab eventKey="overview" title="عن المطعم">
          <RestaurantOverview />
        </Tab>
        <Tab eventKey="photo" title="الصور">
          <RestaurantSlider />
        </Tab>
        <Tab eventKey="menu" title="قائمه الطعام">
          <RestaurantMenu />
          <RestaurantMenu />
          <RestaurantMenu />
        </Tab>
      </Tabs>
    </div>
  );
};
export default RestaurantDetailsComponent;

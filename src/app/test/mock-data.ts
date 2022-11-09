import {Bike} from "../model/bike.model";
import {BaseSearchCriteria} from "../model/search-criteria.model";

export const bike1: Bike = {
    id: 10001,
    is_stock_img: false,
    stolen: true,
    title: "Test Bike",
    url: "",
    manufacturer_id: 1456,
    rear_tire_narrow: false,
    registration_created_at: 0,
    registration_updated_at: 0,
    test_bike: false,
};

export const searchCriteria: BaseSearchCriteria = {
    page: 1,
    per_page: 50,
    stolenness: "All",
};
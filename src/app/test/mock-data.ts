import {Bike} from "../model/bike.model";
import {BaseSearchCriteria} from "../model/search-criteria.model";

export const bike1: Bike = {
    id: 10001,
    is_stock_img: false,
    stolen: true,
    title: "Test Bike",
    url: "",
};

export const searchCriteria: BaseSearchCriteria = {
    page: 1,
    per_page: 50,
    stolenness: "All",
};
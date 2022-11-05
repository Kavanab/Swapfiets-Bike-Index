import {Stolenness} from "./stolenness.model";

export interface BaseSearchCriteria {
    page: number;
    per_page: number;
    stolenness: string;
}

export interface BikeListSearchCriteria extends BaseSearchCriteria {
    serial?: string;
    query?: string;
    manufacturer?: string;
    colors?: string;
    location?: string;
    distance?: number;
}

export function toRequestParams(searchCriteria: BikeListSearchCriteria): { [param: string]: string | number | string[] } {
    const params = {
        page: searchCriteria.page,
        per_page: searchCriteria.per_page,
        stolenness: searchCriteria.stolenness,
    };
    if (searchCriteria.location) {
        params["location"] = searchCriteria.location;
    }
    if (searchCriteria.stolenness) {
        params["stolenness"] = Stolenness[searchCriteria.stolenness];
    }
    return params;
}
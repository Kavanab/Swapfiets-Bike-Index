import {Stolenness} from "./stolenness.model";

export interface BaseSearchCriteria {
    page: number;
    per_page: number;
    stolennes: string;
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
        stolenness: searchCriteria.stolennes,
    };
    if (searchCriteria.location) {
        params["location"] = searchCriteria.location;
    }
    if (searchCriteria.stolennes) {
        params["stolenness"] = Stolenness[searchCriteria.stolennes];
    }
    return params;
}
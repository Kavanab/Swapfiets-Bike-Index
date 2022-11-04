import {Stolenness} from "./stolenness.model";

export interface BaseSearchCriteria {
    page: number;
    per_page: number;
    stolennes: Stolenness;
}

export interface BikeListSearchCriteria extends BaseSearchCriteria {
    serial?: string;
    query?: string;
    manufacturer?: string;
    colors?: string;
    location?: string;
    distance?: number;
}

export function toRequestParams(searchCriteria: BikeListSearchCriteria): { [param: string]: string | string[] } {
    const params = {
        page: searchCriteria.page.toString(),
        per_page: searchCriteria.per_page.toString(),
        stolenness: searchCriteria.stolennes,
    }
    return params
}
import {HttpErrorResponse} from "@angular/common/http";
import {Action} from "@ngrx/store";
import {BikeListSearchCriteria} from "../../model/search-criteria.model";
import {Bike} from "../../model/bike.model";

export enum BikeIndexActionType {
    SearchBikes = "[Bike Index] Search bikes",
    SearchBikesSuccess = "[Bike Index] Search bikes success",
    SearchBikesFailure = "[Bike Index] Search bikes failure",
}

export class SearchBikes implements Action {
    readonly type = BikeIndexActionType.SearchBikes;
    constructor(public searchCriteria: BikeListSearchCriteria) {}
}

export class SearchBikesSuccess implements Action {
    readonly type = BikeIndexActionType.SearchBikesSuccess;
    constructor(public bikes: Bike[]) {}
}

export class SearchBikesFailure implements Action {
    readonly type = BikeIndexActionType.SearchBikesFailure;
    constructor(public error: HttpErrorResponse) {}
}

export type BikeIndexActions = SearchBikes | 
SearchBikesSuccess | 
SearchBikesFailure ;
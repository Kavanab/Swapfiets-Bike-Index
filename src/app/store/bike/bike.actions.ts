import {HttpErrorResponse} from "@angular/common/http";
import {Action} from "@ngrx/store";
import {BikeListSearchCriteria} from "../../model/search-criteria.model";
import {Bike} from "../../model/bike.model";

export enum BikeIndexActionType {
    SearchBikes = "[Bike Index] Search bikes",
    SearchBikesSuccess = "[Company] Get Companies success",
    SearchBikesFailure = "[Company] Get Companies failure",

    GetBikeDetials = "[Bike Index] Get bike detials",
    GetBikeDetialsSuccess = "[Bike Index] Get bike detials success",
    GetBikeDetialsFailure = "[Bike Index] Get bike detials failure",
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

export class GetBikeDetails implements Action {
    readonly type = BikeIndexActionType.GetBikeDetials;
    constructor(public id: number) {}
}

export class GetBikeDetialsSuccess implements Action {
    readonly type = BikeIndexActionType.GetBikeDetialsSuccess;
    constructor(public bikeDetails: Bike) {}
}

export class GetBikeDetialsFailure implements Action {
    readonly type = BikeIndexActionType.GetBikeDetialsFailure;
    constructor(public error: HttpErrorResponse) {}
}

export type BikeIndexActions = SearchBikes | 
SearchBikesSuccess | 
SearchBikesFailure |
GetBikeDetails | 
GetBikeDetialsSuccess | 
GetBikeDetialsFailure ;
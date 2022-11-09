import {HttpErrorResponse} from "@angular/common/http";
import {Action} from "@ngrx/store";
import {BikeListSearchCriteria} from "../../model/search-criteria.model";
import {Bike} from "../../model/bike.model";

export enum BikeIndexActionType {
    SearchBikes = "[Bike Index] Search bikes",
    SearchBikesSuccess = "[Bike Index] Search bikes success",
    SearchBikesFailure = "[Bike Index] Search bikes failure",

    GetBikeDetials = "[Bike Index] Get bike detials",
    GetBikeDetialsSuccess = "[Bike Index] Get bike detials success",
    GetBikeDetialsFailure = "[Bike Index] Get bike detials failure",

    GetBikeCount= "[Bike Index] Get bike count",
    GetBikeCountSuccess = "[Bike Index] Get bike count success",
    GetBikeCountFailure = "[Bike Index] Get bike count failure",
}

export class SearchBikes implements Action {
    readonly type = BikeIndexActionType.SearchBikes;
    constructor(public searchCriteria: BikeListSearchCriteria) {}
}

export class SearchBikesSuccess implements Action {
    readonly type = BikeIndexActionType.SearchBikesSuccess;
    constructor(public bikes: Bike[], bikeCount?: number) {}
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

export class GetBikeCount implements Action {
    readonly type = BikeIndexActionType.GetBikeCount;
    constructor(public searchCriteria: BikeListSearchCriteria) {}
}

export class GetBikeCountSuccess implements Action {
    readonly type = BikeIndexActionType.GetBikeCountSuccess;
    constructor(public bikeCount: number) {}
}

export class GetBikeCountFailure implements Action {
    readonly type = BikeIndexActionType.GetBikeCountFailure;
    constructor(public error: HttpErrorResponse) {}
}

export type BikeIndexActions = SearchBikes | 
SearchBikesSuccess | 
SearchBikesFailure |
GetBikeDetails | 
GetBikeDetialsSuccess | 
GetBikeDetialsFailure |
GetBikeCount | 
GetBikeCountFailure | 
GetBikeCountSuccess ;
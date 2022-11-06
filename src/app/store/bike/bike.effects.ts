import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import * as BikeIndexActions from "./bike.actions";
import {catchError, mergeMap, map, tap, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {BikeIndexService} from "../../services/bike-index.service";
import {Action} from "@ngrx/store";
import {Bike} from "../../model/bike.model";

@Injectable()
export class BikeIndexEffects {

    constructor(private actions$: Actions, private bikeIndexService: BikeIndexService) {}

    @Effect()
    searchBikes$: Observable<Action> = this.actions$.pipe(
        ofType(BikeIndexActions.BikeIndexActionType.SearchBikes),
        switchMap((action: BikeIndexActions.SearchBikes) => {
            return this.bikeIndexService.searchBikes(action.searchCriteria).pipe(
                map((data: Bike[]) => new BikeIndexActions.SearchBikesSuccess(data["bikes"])),
                catchError((error: HttpErrorResponse) => of(new BikeIndexActions.SearchBikesFailure(error))),
            );
        }),
    );

    @Effect()
    getBikeDetails$: Observable<Action> = this.actions$.pipe(
        ofType(BikeIndexActions.BikeIndexActionType.GetBikeDetials),
        switchMap((action: BikeIndexActions.GetBikeDetails) => {
            return this.bikeIndexService.getBikeDetails(action.id).pipe(
                map((data: Bike) => new BikeIndexActions.GetBikeDetialsSuccess(data["bike"])),
                catchError((error: HttpErrorResponse) => of(new BikeIndexActions.GetBikeDetialsFailure(error))),
            );
        }),
    );
}
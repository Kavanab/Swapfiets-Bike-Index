import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import * as BikeIndexActions from "./bike.actions";
import {catchError, mergeMap, map, tap, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {BikeIndexService} from "../../services/bike-index.service";
import {Action} from "@ngrx/store";
import {Bike, BikeCount} from "../../model/bike.model";
import {Stolenness} from "src/app/model/stolenness.model";

@Injectable()
export class BikeIndexEffects {

    constructor(private actions$: Actions, private bikeIndexService: BikeIndexService) {}

    searchBikes$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BikeIndexActions.BikeIndexActionType.SearchBikes),
        switchMap((action: BikeIndexActions.SearchBikes) => {
            return this.bikeIndexService.searchBikes(action.searchCriteria).pipe(
                mergeMap((data: Bike[]) => {
                    return [
                        new BikeIndexActions.SearchBikesSuccess(data["bikes"]), 
                        new BikeIndexActions.GetBikeCount(action.searchCriteria),
                    ];
                }),
                catchError((error: HttpErrorResponse) => of(new BikeIndexActions.SearchBikesFailure(error))),
            );
        }),
    ));

    getBikeCount$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BikeIndexActions.BikeIndexActionType.GetBikeCount),
        switchMap((action: BikeIndexActions.GetBikeCount) => {
            return this.bikeIndexService.getBikeCount(action.searchCriteria).pipe(
                map((data: BikeCount) => {
                    const totalCount = this.getCount(data, action.searchCriteria.stolenness);
                    return new BikeIndexActions.GetBikeCountSuccess(totalCount);
                }),
                catchError((error: HttpErrorResponse) => of(new BikeIndexActions.GetBikeCountFailure(error))),
            );
        }),
    ));

    getBikeDetails$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BikeIndexActions.BikeIndexActionType.GetBikeDetials),
        switchMap((action: BikeIndexActions.GetBikeDetails) => {
            return this.bikeIndexService.getBikeDetails(action.id).pipe(
                map((data: Bike) => new BikeIndexActions.GetBikeDetialsSuccess(data["bike"])),
                catchError((error: HttpErrorResponse) => of(new BikeIndexActions.GetBikeDetialsFailure(error))),
            );
        }),
    ));

    private getCount(bikeCount: BikeCount, state: string) {
        let count = 0;
        if (Stolenness[state] !== Stolenness.All) {
            count = bikeCount[state.toLowerCase()];
        } else {
            count = Object.values(bikeCount).reduce((a, b) => a + b, 0);
        }
        return count;
    }
}
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import * as BikeIndexActions from "./bike.actions";
import {catchError, mergeMap, map, tap} from "rxjs/operators";
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
        mergeMap((action: BikeIndexActions.SearchBikes) => {
            return this.bikeIndexService.searchBikes(action.searchCriteria).pipe(
                tap((data: Bike[]) => console.log(data)),
                map((data: Bike[]) => new BikeIndexActions.SearchBikesSuccess(data)),
                catchError((error: HttpErrorResponse) => of(new BikeIndexActions.SearchBikesFailure(error))),
            );
        }),
    );
}
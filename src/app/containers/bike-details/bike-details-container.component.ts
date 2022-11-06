import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Bike} from "../../model/bike.model";
import {GetBikeDetails} from "src/app/store/bike/bike.actions";
import {AppState} from "../../store/app-state.model";

@Component({
    selector: "app-bike-details-container",
    templateUrl: "./bike-details-container.component.html",
    styleUrls: ["./bike-details-container.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailsContainerComponent implements OnInit {

    bikeDetails$: Observable<Bike>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppState>,
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.store.dispatch(new GetBikeDetails(params["id"]));
        });
        this.bikeDetails$ = this.store.select((store) => store.bikes["bikeDetails"]);
    }

}

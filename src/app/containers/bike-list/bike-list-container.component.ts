import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {BikeListSearchCriteria} from "src/app/model/search-criteria.model";
import {SearchBikes} from "src/app/store/bike/bike.actions";
import {AppState} from "../../store/app-state.model";
import {Observable} from "rxjs";
import {Bike} from "../../model/bike.model";

@Component({
    selector: "app-bike-list-container",
    templateUrl: "./bike-list-container.component.html",
    styleUrls: ["./bike-list-container.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeListContainerComponent implements OnInit {

    bikesList$: Observable<Bike[]>;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.bikesList$ = this.store.select((store) => store.bikes);
    }

    searchBikes(searchCriteria: BikeListSearchCriteria) {
        this.store.dispatch(new SearchBikes(searchCriteria));
    }
}

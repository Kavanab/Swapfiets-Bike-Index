import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {BikeListSearchCriteria} from "src/app/model/search-criteria.model";
import {Stolenness} from "src/app/model/stolenness.model";
import {SearchBikes} from "src/app/store/bike/bike.actions";
import {AppState} from "src/app/store/state.model";

@Component({
    selector: "app-bike-list-container",
    templateUrl: "./bike-list-container.component.html",
    styleUrls: ["./bike-list-container.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeListContainerComponent implements OnInit {

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        const searchCriteria: BikeListSearchCriteria = {
            page: 1,
            per_page: 25,
            stolennes: Stolenness["All"],
        };
        this.store.dispatch(new SearchBikes(searchCriteria));
    }

}

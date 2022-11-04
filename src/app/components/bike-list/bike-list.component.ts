import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {Bike} from "src/app/model/bike.model";
import {BikeListSearchCriteria} from "src/app/model/search-criteria.model";
import {Stolenness} from "src/app/model/stolenness.model";

@Component({
    selector: "app-bike-list",
    templateUrl: "./bike-list.component.html",
    styleUrls: ["./bike-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeListComponent implements OnInit, OnChanges {

    @Input() bikesList: Bike[] = [];
    @Output() searchBikes: EventEmitter<BikeListSearchCriteria> = new EventEmitter();

    ngOnInit(): void {
        const searchCriteria: BikeListSearchCriteria = {
            page: 1,
            per_page: 25,
            stolennes: Stolenness["All"],
        };
        this.searchBikes.emit(searchCriteria);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.bikesList);
        
    }
}

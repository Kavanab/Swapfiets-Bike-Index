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

    location: string = "";
    stolenness: string[] = [];
    stateOfStolenness: string = "All";
    searchCriteria: BikeListSearchCriteria = {
        page: 1,
        per_page: 25,
        stolennes: this.stateOfStolenness,
    };

    displayedColumns: string[] = ['id','title', 'location', 'manufacturer_name', 'stolen'];
    resultsLength: number = 0;

    constructor() {
        this.stolenness = Object.keys(Stolenness);
    }

    ngOnInit(): void {
        this.searchBikes.emit(this.searchCriteria);
    }

    ngOnChanges(changes: SimpleChanges): void {
        
       if(changes["bikesList"].currentValue.listOfBikes.length > 0) {
            console.log(changes["bikesList"].currentValue.listOfBikes);
            this.resultsLength = changes["bikesList"].currentValue.listOfBikes.length;
       }
       
    }

    searchBikesInLocation() {
        if(this.location) {
            if(this.stateOfStolenness !== "Proximity") {
                this.stateOfStolenness = "Proximity";
            }
        }
        this.searchCriteria = {
            ...this.searchCriteria,
            stolennes: this.stateOfStolenness,
            location: this.location,
        };
        this.searchBikes.emit(this.searchCriteria);
    }
}

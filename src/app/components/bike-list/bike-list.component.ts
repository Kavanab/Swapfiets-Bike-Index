import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
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

    readonly _pageSize = 5;
    location: string = "";
    stolenness: string[] = [];
    stateOfStolenness: string = "All";
    displayedColumns: string[] = ["id", "title", "location", "manufacturer_name", "stolen"];
    dataSource = new MatTableDataSource<Bike>(this.bikesList["listOfBikes"]);
    searchCriteria: BikeListSearchCriteria = {
        page: 1,
        per_page: 50,
        stolennes: this.stateOfStolenness,
    };

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() {
        this.stolenness = Object.keys(Stolenness);
    }

    ngOnInit(): void {
        this.searchBikes.emit(this.searchCriteria);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["bikesList"].currentValue.listOfBikes.length > 0) {
            this.dataSource.data = this.bikesList["listOfBikes"];
            this.dataSource.paginator = this.paginator;
        }
    }
    
    searchBikesInLocation() {
        if (this.location) {
            if (this.stateOfStolenness !== "Proximity") {
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

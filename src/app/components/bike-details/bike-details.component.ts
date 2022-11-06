import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import {Bike} from "src/app/model/bike.model";

@Component({
    selector: "app-bike-details",
    templateUrl: "./bike-details.component.html",
    styleUrls: ["./bike-details.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailsComponent {
    @Input() bikeDetails: Bike;
}

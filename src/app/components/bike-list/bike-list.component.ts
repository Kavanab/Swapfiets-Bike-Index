import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: "app-bike-list",
    templateUrl: "./bike-list.component.html",
    styleUrls: ["./bike-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeListComponent {
}

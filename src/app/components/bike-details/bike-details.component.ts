import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Bike} from "src/app/model/bike.model";

@Component({
    selector: "app-bike-details",
    templateUrl: "./bike-details.component.html",
    styleUrls: ["./bike-details.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeDetailsComponent {
    
    @Input() bikeDetails: Bike;

    expansionStatus = {
        img: true,
        description: false,
        frameDetails: false,
        publicImages: false,
    };

    getThumbnailImage() {
        const thumbImg = "/assets/alt-thumbnail.jpeg";
        return this.bikeDetails.thumb ? this.bikeDetails.thumb : thumbImg;
    }

    getBikeImage() {
        const imageNotFound = "/assets/cycle-drawing.jpg";
        return this.bikeDetails.large_img ? this.bikeDetails.large_img : imageNotFound;
    }
}

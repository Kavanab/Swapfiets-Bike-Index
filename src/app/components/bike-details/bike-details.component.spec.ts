import {TestBed} from "@angular/core/testing";
import {bike1} from "src/app/test/mock-data";
import {BikeDetailsComponent} from "./bike-details.component";

describe("BikeDetailsComponent", () => {
    let bikeDetailsComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [BikeDetailsComponent],
        }).compileComponents();
    
        const fixture = TestBed.createComponent(BikeDetailsComponent);
        bikeDetailsComponent = fixture.componentInstance;
    });

    beforeEach(() => {
        bikeDetailsComponent.bikeDetails = {
            ...bike1,
        };
    });
    
    describe("getThumbnailImage", () => {
        it("should return a valid image url", () => {
            bikeDetailsComponent.bikeDetails = {
                thumb: "mockurl",
            };
            const imageUrl = bikeDetailsComponent.getThumbnailImage();
            expect(imageUrl).toEqual("mockurl");
        });
        it("should return a image from assets", () => {
            bikeDetailsComponent.bikeDetails = {
                thumb: null,
            };
            const imageUrl = bikeDetailsComponent.getThumbnailImage();
            expect(imageUrl).toEqual("/assets/alt-thumbnail.jpeg");
        });
    });

    describe("getBikeImage", () => {
        it("should return a valid image url", () => {
            bikeDetailsComponent.bikeDetails = {
                large_img: "mockurl",
            };
            const imageUrl = bikeDetailsComponent.getBikeImage();
            expect(imageUrl).toEqual("mockurl");
        });
        it("should return a image from assets", () => {
            bikeDetailsComponent.bikeDetails = {
                large_img: null,
            };
            const imageUrl = bikeDetailsComponent.getBikeImage();
            expect(imageUrl).toEqual("/assets/cycle-drawing.jpg");
        });
    });
});

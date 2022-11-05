import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {fakeAsync, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {bike1} from "src/app/test/mock-data";

import {BikeListComponent} from "./bike-list.component";

describe("BikeListComponent", () => {
    let bikeListComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [BikeListComponent],
            imports: [FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    
        const fixture = TestBed.createComponent(BikeListComponent);
        bikeListComponent = fixture.componentInstance;
    });

    describe("ngOnInit", () => {
        it("should emit searchBikes event for initial load", fakeAsync(() => {
            spyOn(bikeListComponent.searchBikes, "emit");

            bikeListComponent.searchCriteria = {
                page: 1,
                per_page: 50,
                stolenness: "All",
            };
            
            bikeListComponent.ngOnInit();

            expect(bikeListComponent.searchBikes.emit).toHaveBeenCalledWith({
                page: 1,
                per_page: 50,
                stolenness: "All",
            });
        }));
    });

    describe("ngOnChanges", () => {

        it("should set dataSource and paginator", fakeAsync(() => {
            const changes = {
                bikesList: {
                    currentValue: {
                        listOfBikes: [bike1],
                    },
                },
            };

            bikeListComponent.ngOnChanges(changes);

            expect(bikeListComponent.dataSource).toBeDefined();
        }));
    });

    describe("searchBikesInLocation", () => {
        it("should emit searchBikes event with updated data", fakeAsync(() => {
            spyOn(bikeListComponent.searchBikes, "emit");
            bikeListComponent.location = "CA";
            bikeListComponent.searchCriteria = {
                page: 1,
                per_page: 50,
                stolenness: "Proximity",
            };
            
            bikeListComponent.searchBikesInLocation();

            expect(bikeListComponent.searchBikes.emit).toHaveBeenCalledWith({
                page: 1,
                per_page: 50,
                stolenness: "Proximity",
                location: "CA",
            });
        }));
    });
    
});

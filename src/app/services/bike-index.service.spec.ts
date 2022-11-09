import {TestBed, inject, waitForAsync} from "@angular/core/testing";
import {BikeIndexService} from "./bike-index.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {bike1, searchCriteria} from "../test/mock-data";
import {of} from "rxjs";
import {BikeCount} from "../model/bike.model";

describe("BikeIndexService", () => {
    let bikeIndexService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, BrowserAnimationsModule],
            providers: [BikeIndexService],
        });
       
    });

    beforeEach(inject([BikeIndexService], (_service: BikeIndexService) => {
        bikeIndexService = _service;
    }));

    describe("searchBikes()", () => {
        it("should get list of bikes", waitForAsync(() => {
            const expectedUrl = "https://bikeindex.org:443/api/v3/search";
            const expectedBikesList = bike1;
            const expectedParams = {
                page: 1,
                per_page: 50,
                stolenness: "all",
            };
            spyOn(bikeIndexService.http, "get").and.returnValue(of(bike1));

            bikeIndexService.searchBikes(searchCriteria).subscribe((result) => {
                expect(result).toEqual(expectedBikesList);
            });

            expect(bikeIndexService.http.get).toHaveBeenCalledOnceWith(expectedUrl, {params: expectedParams});
            
        }));

        it("should get number of bikes", waitForAsync(() => {
            const expectedUrl = "https://bikeindex.org:443/api/v3/search/count";
            const expectedBikesCount: BikeCount = {
                non: 1,
                proximity: 10,
                stolen: 5,
            };
            const expectedParams = {
                page: 1,
                per_page: 50,
                stolenness: "all",
            };
            spyOn(bikeIndexService.http, "get").and.returnValue(of(expectedBikesCount));

            bikeIndexService.getBikeCount(searchCriteria).subscribe((result) => {
                expect(result).toEqual(expectedBikesCount);
            });

            expect(bikeIndexService.http.get).toHaveBeenCalledOnceWith(expectedUrl, {params: expectedParams});
        }));
    });

});

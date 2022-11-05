import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {TestBed, waitForAsync} from "@angular/core/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {BikeListSearchCriteria} from "src/app/model/search-criteria.model";
import {Stolenness} from "src/app/model/stolenness.model";
import {SearchBikes} from "src/app/store/bike/bike.actions";
import {bike1} from "src/app/test/mock-data";
import {AppState} from "../../store/app-state.model";
import {BikeListContainerComponent} from "./bike-list-container.component";

describe("BikeListContainerComponent", () => {
    let bikeListContainerComponent;
    let store: MockStore<AppState>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [BikeListContainerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                provideMockStore({
                    initialState: {},
                }),
            ],
        }).compileComponents();
    
        const fixture = TestBed.createComponent(BikeListContainerComponent);
        bikeListContainerComponent = fixture.componentInstance;
        store = TestBed.inject(MockStore);
    });

    describe("ngOnInit", () => {
        it("should define observables", waitForAsync(() => {
            store.setState(
                {
                    bikes: [bike1],
                },
            );
            bikeListContainerComponent.ngOnInit();
            bikeListContainerComponent.bikesList$.subscribe((bikes) => 
                expect(bikes).toEqual([bike1]));
        }));
    });

    describe("searchBikes", () => {
        it("should dispatch action to DeleteEmployee", () => {
            spyOn(bikeListContainerComponent.store, "dispatch");
            const searchCriteria: BikeListSearchCriteria = {
                page: 1,
                per_page: 30,
                stolenness: Stolenness.All,
            };
            const expectedAction = new SearchBikes(searchCriteria);
            bikeListContainerComponent.searchBikes(searchCriteria);
            expect(bikeListContainerComponent.store.dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});

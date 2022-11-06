import {ComponentFixture, TestBed} from "@angular/core/testing";
import {BikeDetailsContainerComponent} from "./bike-details-container.component";

describe("BikeDetailsComponent", () => {
    let component: BikeDetailsContainerComponent;
    let fixture: ComponentFixture<BikeDetailsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BikeDetailsContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BikeDetailsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {BikeListContainerComponent} from "./containers/bike-list/bike-list-container.component";
import {BikeListComponent} from "./components/bike-list/bike-list.component";
import {BikeIndexEffects} from "./store/bike/bike.effects";

@NgModule({
    declarations: [
        AppComponent,
        BikeListContainerComponent,
        BikeListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([
            BikeIndexEffects,
        ]),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

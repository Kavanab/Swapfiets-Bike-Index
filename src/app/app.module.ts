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
import {BikeIndexReducer} from "./store/bike/bike.reducer";
import {HeaderComponent} from "./components/header/header.component";
import {FormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        BikeListContainerComponent,
        BikeListComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            bikes: BikeIndexReducer,
        }),
        EffectsModule.forRoot([
            BikeIndexEffects,
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

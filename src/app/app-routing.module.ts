import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BikeDetailsContainerComponent} from "./containers/bike-details/bike-details-container.component";
import {BikeListContainerComponent} from "./containers/bike-list/bike-list-container.component";

const routes: Routes = [
    {path: "bike-list", component: BikeListContainerComponent},
    {path: "details/:id", component: BikeDetailsContainerComponent},
    {path: "", redirectTo: "/bike-list", pathMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import {Bike} from "../model/bike.model";

export interface AppState {
    readonly bikes: Array<Bike>;
}
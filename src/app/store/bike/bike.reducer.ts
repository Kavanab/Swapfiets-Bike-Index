import {Bike} from "../../model/bike.model";
import {BikeIndexActions, BikeIndexActionType} from "./bike.actions";

const initialState: Array<Bike> = [];

export function BikeIndexReducer(
    state: Array<Bike> = initialState,
    action: BikeIndexActions,
) {
    switch (action.type) {
        case BikeIndexActionType.SearchBikesSuccess:
            return [...state, ...action.bikes];
        default:
            return state;
    }
}
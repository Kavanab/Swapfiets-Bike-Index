import {BikeIndexActions, BikeIndexActionType} from "./bike.actions";

const initialState = {
    listOfBikes: [],
    bikeDetails: {},
};

export function BikeIndexReducer(
    state: any = initialState,
    action: BikeIndexActions,
) {
    switch (action.type) {
        case BikeIndexActionType.SearchBikesSuccess:
            return {...state, listOfBikes: action.bikes};
        case BikeIndexActionType.GetBikeDetialsSuccess:
            return {...state, bikeDetails: {...action.bikeDetails}};
        default:
            return state;
    }
}
import { Reducer } from "redux";
import { HeroEnumTypes, HeroState } from "./types";

const INITIAL_STATE: HeroState = {
    hero: []
}

const reducerHero: Reducer<HeroState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case HeroEnumTypes.GET_HERO_SUCCESS:
            return {
                ...state,
                hero: action.payload
            }
        case HeroEnumTypes.GET_HERO_REQUEST:
            return {
                ...state
            }
        case HeroEnumTypes.GET_HERO_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducerHero
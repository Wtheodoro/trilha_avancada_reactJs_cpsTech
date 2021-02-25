import { takeLatest } from 'redux-saga/effects'
import { all } from "typed-redux-saga";
import { HeroEnumTypes } from './hero/types'
import { getHeroSaga } from './hero/saga'

export default function* rootSaga(): any{
    return yield all([
        takeLatest(HeroEnumTypes.GET_HERO_REQUEST, getHeroSaga)
    ])
}
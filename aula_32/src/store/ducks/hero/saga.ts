import { put } from 'redux-saga/effects'
import { call } from "typed-redux-saga";
import { loadHeroFailure, loadHeroSuccess } from './actions'
import HeroService from '../../../services/hero-service'

export function* getHeroSaga(hero: any): any {
    try {
        const response: any = yield call(HeroService.getHero, hero.payload)
        yield put(loadHeroSuccess(response.data.results))
        console.log(response.data.results)
    } catch (err) {
        console.log(err)
        yield put(loadHeroFailure())
    }
}
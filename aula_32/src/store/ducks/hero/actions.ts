import { action } from 'typesafe-actions'
import { Hero, HeroEnumTypes} from './types'

// export const loadHeroSuccess = (payload: Hero) => action(HeroEnumTypes.GET_HERO_SUCCESS, payload)

export const loadHeroRequest = (hero: any) => action(HeroEnumTypes.GET_HERO_REQUEST, hero)

export const loadHeroFailure = () => action(HeroEnumTypes.GET_HERO_FAILURE)

export const loadHeroSuccess = (payload: any) => action(HeroEnumTypes.GET_HERO_SUCCESS, payload)
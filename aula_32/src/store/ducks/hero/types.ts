export enum HeroEnumTypes {
    GET_HERO_REQUEST = '@GET_HERO_REQUEST',
    GET_HERO_SUCCESS = '@GET_HERO_SUCCESS',
    GET_HERO_FAILURE = '@GET_HERO_FAILURE'
}

export interface Hero {
    id: string,
    name: string,
    powerstats: HeroPowerstats
    image: HeroImg
    appearence: HeroAppearence
}

export interface HeroPowerstats {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
}

export interface HeroImg {
    url: string
}

export interface HeroAppearence {
    eyeColor: string
    gender: string
    hairColor: string
    height: string[]
    race: string
    weight: string[]
}

export interface HeroState {
    hero: Hero[]
}

export interface HeroSelect {
    reducerHero: HeroState
}

// tipagem para as props

export type AppearenceProps = {
    image: string
    name: string
}

export type StatsProps = {
    stats: HeroPowerstats
}
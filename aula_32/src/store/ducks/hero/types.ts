export enum HeroEnumTypes {
    GET_HERO_REQUEST = '@GET_HERO_REQUEST',
    GET_HERO_SUCCESS = '@GET_HERO_SUCCESS',
    GET_HERO_FAILURE = '@GET_HERO_FAILURE'
}

export interface Hero {
    id: string,
    name: string,
    powerstats: HeroPowerstats
}

export interface HeroPowerstats {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
}

export interface HeroState {
    hero: Hero[]
}
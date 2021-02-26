import api from './api'

const HeroService = {
    getHero: (hero: any) => api.get(`/search/${hero}`)
}

export default HeroService

// {headers: {"Access-Control-Allow-Origin": "*"}}
import api from './api'

const HeroService = {
    getHero: (hero: any) => api.get(`/search/${hero}`,
    {headers: {"Access-Control-Allow-Origin": "*"}})
}

export default HeroService

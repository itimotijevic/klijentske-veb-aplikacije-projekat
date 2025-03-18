import axios from 'axios';

const client = axios.create({
    baseURL: 'https://movie.pequla.com/api',
    headers:     {
        'Accept': 'application/json',
        'X-CLient-Name': 'KVA/2025'
    },    
    validateStatus: (status: number) =>{
        return status === 200 // samo ako je 200 vrati response
                                // u ostalim slucajevima baci izuzetak
    }
})


export class MovieService {
    static async getMovies(page: number = 0,size: number = 10)    {
        return client.request({
            url: '/movie',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'movieId,asc', // nisam siguran da li treba po moveID i title ili po ovome????
                'type': 'title'

            }
        });
              
    }

    static async getMovieById(id: number) {
        return axios.get(`/movie/${id}`)  
    }
}
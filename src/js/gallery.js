import { UnsplashAPI } from './UnsplashAPI.js';

const api = new UnsplashAPI();
api.getPopularPhotos(1).then(res => console.log(res));

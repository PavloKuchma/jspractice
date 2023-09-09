import { UnsplashAPI } from './UnsplashAPI.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './galleryMarkup.js';

const container = document.getElementById('tui-pagination-container');
const galleryList = document.querySelector('.js-gallery');
const search = document.querySelector('.js-search-form');
const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const api = new UnsplashAPI();
api.getPopularPhotos(page).then(({ total, results }) => {
  pagination.reset(total);
  const markup = createGalleryCard(results);
  galleryList.innerHTML = markup;
});

pagination.on('afterMove', getPopular);

function getPopular(event) {
  const currentPage = event.page;
  api.getPopularPhotos(currentPage).then(({ total, results }) => {
    const markup = createGalleryCard(results);
    galleryList.innerHTML = markup;
  });
}

search.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const { query } = e.target.elements;
  const searchQuery = query.value.trim();
  if (searchQuery === '') return alert('enter word for search');
  api.query = searchQuery;
  pagination.off('afterMove', getPopular);
  pagination.off('afterMove', getPhoto);

  api.getByQuery(page).then(({ total, results }) => {
    pagination.reset(total);
    const markup = createGalleryCard(results);
    galleryList.innerHTML = markup;
  });
  pagination.on('afterMove', getPhoto);
}

function getPhoto(event) {
  const currentPage = event.page;
  api.getByQuery(currentPage).then(({ total, results }) => {
    const markup = createGalleryCard(results);
    galleryList.innerHTML = markup;
  });
}

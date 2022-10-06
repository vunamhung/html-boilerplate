import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import persist from '@alpinejs/persist';
import intersect from '@alpinejs/intersect';
import { scroll, xFetch } from './helper';

Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.magic('fetchjson', () => {
  return async (url, jsonItem, method) => await xFetch(url, jsonItem, method);
});

Alpine.magic('fetch', () => {
  return async (url, method) => await xFetch(url, null, method);
});

Alpine.magic('scroll', () => {
  return (target, options) => scroll(target, options);
});

Alpine.start();

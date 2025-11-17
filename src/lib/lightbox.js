// src/lib/lightbox.js
import { writable } from "svelte/store";

export const showLightbox = writable(false);
export const lightboxImages = writable([]);     // array of image URLs
export const lightboxCaptions = writable([]);   // array of captions
export const lightboxIndex = writable(0);       // current index

export function openLightbox(images, captions = [], start = 0) {
  lightboxImages.set(images);
  lightboxCaptions.set(captions);
  lightboxIndex.set(start);
  showLightbox.set(true);
}

export function closeLightbox() {
  showLightbox.set(false);
}

export function nextImage() {
  lightboxIndex.update(i => {
    const arr = getCache(lightboxImages);
    return (i + 1) % arr.length;
  });
}

export function prevImage() {
  lightboxIndex.update(i => {
    const arr = getCache(lightboxImages);
    return (i - 1 + arr.length) % arr.length;
  });
}

/* internal helper */
function getCache(store) {
  let v;
  store.subscribe(_ => (v = _))();
  return v;
}

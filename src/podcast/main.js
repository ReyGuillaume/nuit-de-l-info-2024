import {series} from "./assets/podcasts.js";

const container = document.querySelector('#container');

const racine = 'http://51.91.146.174:8080';

function create(tagName, container, className) {
  const element = document.createElement(tagName);
  container.appendChild(element);
  element.classList.add(className);
  return element;
}

const goBackButton = (container, callback) => {
  const link = create('a', container, 'back-button');
  link.addEventListener('click', callback);
  const span = create('span', link, 'material-symbols-outlined');
  span.textContent = 'chevron_left'
  const span2 = create('span2', link);
  span2.textContent = 'Back';

}

let overlay = undefined;

const openVideoModal = (videoDetails) => {
  overlay = create('div', container, 'overlay');
  overlay.addEventListener('click', closeVideoModal);

  const modal = create('div', overlay, 'modal');
  modal.addEventListener('click', e => e.stopPropagation())
  const videoComponent = create('video', modal);
  videoComponent.controls = true;
  videoComponent.autoplay = true;
  const videoSource = create('source', videoComponent);
  videoSource.src = videoDetails.url
  videoSource.type = videoDetails.type

  document.addEventListener('keydown', handleEscapeKey);
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeVideoModal();
  }
};

const closeVideoModal = () => {
  overlay.remove();
  overlay = undefined;

  document.removeEventListener('keydown', handleEscapeKey);
}

const detailPage = (serie) => {
  container.innerHTML = '';

  goBackButton(container, mainPage);

  const cardContainer = create('section', container, 'card-container');
  serie.videos.forEach(video => {
    const card = create('div', cardContainer, 'card');
    const videoComponent = create('video', card);
    const videoSource = create('source', videoComponent);
    videoSource.src = video.url
    videoSource.type = video.type

    const cardDetails = create('div', card, 'card-details');
    const title = create('h2', cardDetails)
    title.textContent = video.title;

    card.addEventListener('click', () => openVideoModal(video))
  })
}

const mainPage = () => {
  container.innerHTML = '';

  goBackButton(container, () => {
    location.href = racine;
  });

  const cardContainer = create('section', container, 'card-container');
  series.forEach(serie => {
    const card = create('div', cardContainer, 'card');
    const img = create('img', card);
    img.src = serie.previewUrl;
    const cardDetails = create('div', card, 'card-details');
    const title = create('h2', cardDetails)
    title.textContent = serie.name;

    card.addEventListener('click', () => detailPage(serie));
  })
}

mainPage();
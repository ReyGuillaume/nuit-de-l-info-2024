const container = document.querySelector('#container');

const racine = 'http://localhost:5173';

function create(tagName, container, className) {
  const element = document.createElement(tagName);
  container.appendChild(element);
  element.classList.add(className);
  return element;
}

const series = [
    {
      id: 1,
      name: 'série 1',
      previewUrl: '/src/podcast/assets/secluded-island-in-ocean-l7qaxmbsuw61guvd.webp',
      videos: [
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        }
      ]
    }, {
      id: 2,
      name: 'série 2',
      previewUrl: '/src/podcast/assets/secluded-island-in-ocean-l7qaxmbsuw61guvd.webp',
      videos: [
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        }
      ]
    }, {
      id: 3,
      name: 'série 3',
      previewUrl: '/src/podcast/assets/secluded-island-in-ocean-l7qaxmbsuw61guvd.webp',
      videos: [
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        },
        {
          title: 'title',
          description: 'description',
          url: '/src/podcast/assets/test.mp4',
          type: 'video/mp4'
        }
      ]
    },
  {
    id: 4,
    name: 'série 4',
    previewUrl: '/src/podcast/assets/secluded-island-in-ocean-l7qaxmbsuw61guvd.webp',
    videos: [
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      }
    ]
  }, {
    id: 5,
    name: 'série 5',
    previewUrl: '/src/podcast/assets/secluded-island-in-ocean-l7qaxmbsuw61guvd.webp',
    videos: [
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      },
      {
        title: 'title',
        description: 'description',
        url: '/src/podcast/assets/test.mp4',
        type: 'video/mp4'
      }
    ]
  },
  ]


const goBackButton = (container, callback) => {
  const link = create('a', container, 'back-button');
  link.addEventListener('click', callback);
  const span = create('span', link, 'material-symbols-outlined');
  span.textContent = 'chevron_left'
  const span2 = create('span2', link);
  span2.textContent = 'Back';

}

const detailPage = (serie) => {
  container.innerHTML = '';

  goBackButton(container, mainPage);

  const cardContainer = create('section', container, 'card-container');
  serie.videos.forEach(video => {
    const card = create('div', cardContainer, 'card');
    const videoComponent = create('video', card);
    videoComponent.controls = true;
    const videoSource = create('source', videoComponent);
    videoSource.src = video.url
    videoSource.type = video.type

    const cardDetails = create('div', card, 'card-details');
    const title = create('h2', cardDetails)
    title.textContent = video.title;

    card.addEventListener('click', () => detailPage(serie));
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
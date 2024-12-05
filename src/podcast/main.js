const episodeList = document.querySelector('.episode-list');

function create(tagName, container) {
  const element = document.createElement(tagName);
  container.appendChild(element);
  return element;
}

const videos = [
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



const li = create('li', episodeList);

videos.forEach(video => {
  console.log(video);
  const videoElement = create('video', li);
  const videoSource = create('source', videoElement);
  videoSource.src = video.url;
  videoSource.type = video.type;
  videoElement.controls = true;
})

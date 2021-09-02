const URL = `https://pixabay.com/api`;
const API_KEY = `key=22260377-843feab13a68cee38d30608c2`;

function fetchPicture({ searchQuery = "", page = 1, pageSize = 12 } = {}) {
  return fetch(
    `${URL}/?q=${searchQuery}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  });
}

// function fetchPicture(name, page) {
// return fetch(
//   `${URL}/?q=${name}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// ).then((response) => {
//   if (response.status === 200) {
//     return response.json();
//   }
// });
// }

export default fetchPicture;

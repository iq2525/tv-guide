import axios from 'axios'

// function that makes the api request and returns a Promise for response
const fetchData = () => {
    console.log('fetching data...')
  
    return axios({
      method: "get",
      url: "http://api.tvmaze.com/search/shows?q=sport"
    });
}

export { fetchData }
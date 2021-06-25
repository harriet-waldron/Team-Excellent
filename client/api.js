import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const API_URL = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/'

export function externalApi () {
  return request.post(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${starSign}&day=today`)
    .set('X-RapidAPI-Key', '3b395eee1fmshf0cab510630df35p129287jsned3627aede7c')
    .then(result => result.body)
    .catch(err => {
      console.log(err.message)
    })
}

export function internalApi () {
    return request.get (server.URL/{score})
        .then(response => response.body)
}

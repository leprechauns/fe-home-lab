import Rest from './driver/rest'
// const resource = 'home'
const resource = 'http://mock.testenv.labmai.com/mock/5cb3f0a657b64f009798a38f/labmai-fe-home-entry/rest/home'

export default class Origin {
  constructor () {
    this.rest = new Rest({})
  }
  get (params) {
    let curResource = resource + `/${params.target}`
    if (params && params.data) {
      curResource += `/${params.data}`
    }
    return this.rest.get({
      resource: curResource
    }).then(r => r)
  }
}

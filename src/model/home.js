import Rest from './driver/rest'
// const resource = 'home'
const resource = 'http://demo2.labmai.com/rest/home'

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

import Rest from './driver/rest'
// const resource = 'home'
const resource = 'http://demo2.labmai.com/rest/home'

export default class Origin {
  constructor () {
    this.rest = new Rest({})
  }
  get (params) {
    return this.rest.get({
      resource: params && params.data ? `${resource}/${params.target}/${params.data}` : `${resource}/${params.target}`
    }).then(r => r)
  }
}

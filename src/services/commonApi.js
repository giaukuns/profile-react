import AxiosService from './http.services'

const commonApi = {
  /**
   * Post
   */
  getPostList: async () => {
    const url = 'post/getAllPost'
    const data = AxiosService.get(url)
    if((await data).data){
        return (await data).data
    }
  },
  /**
   * Home
   */
   getMeta: async () => {
    const url = 'home/getMeta'
    const data = AxiosService.get(url)
    if((await data).data){
        return (await data).data
    }
  },
}

export default commonApi

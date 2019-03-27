'use strict'
const Database = use('Database')
class PostsController {
  * lists(request, response) {
    let post = request.post()
    let option = {
      content_id: post.content_id || 0
    }
    let res = {}
    let data = yield Database.select('id', 'content1', 'content2', 'relay', 'sentence').from('entity_relation').where('content_id', option.content_id)
    res['data'] = data
    yield response.send(res)
  }
  * create(request, response) {
    let post = request.post()
    let option = {
      content1: post.content1 || '',
      content2: post.content2 || '',
      relay: post.relay || '',
      sentence: post.sentence || '',
      content_id: post.content_id || 0
    }
    let res = {}
    if (option.content1 === '' || option.content2 === '' || option.relay === '' || option.sentence === '' || option.content_id === 0) {
      response.send('不能为空')
    } else {
      const id = yield Database
        .insert(option)
        .into('entity_relation')
      res['id'] = id[0]
      yield response.send(res)
    }
  }
  * del(request, response) {
    let post = request.post()
    let option = {
      id: post.id || 0
    }
    let res = {}
    if (option.id === 0) {
      response.send('id不能为空')
    } else {
      const affectedRows = yield Database
        .table('entity_relation')
        .where('id', option.id)
        .del()
        res['data'] = affectedRows
      yield response.send(res)
    }
  }
}

module.exports = PostsController

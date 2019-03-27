'use strict'
const Database = use('Database')
class ContentsController {
  * create(request, response) {
    let post = request.post()
    let option = {
      title: post.title || '',
      content: post.content || ''
    }
    const id = yield Database
      .insert(option)
      .into('contents')
    let res = {}
    res[id] = id[0]
    response.send(res)
  }
  * lists(request, response) {
    const lists = yield Database
      .select('id', 'title')
      .from('contents')
    let res = {
      lists: lists
    }
    response.send(res)
  }
  *detail(request, response) {
    let post = request.post()
    let option = {
      content_id: post.content_id || 0
    }
    const detail = yield Database
      .select('id', 'title', 'content')
      .from('contents')
      .where('id', option.content_id)
    let res = {
      detail: detail[0]
    }
    if (option.content_id === 0) {
      response.send('id不能为空')
    } else {
      response.send(res)
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
        .table('contents')
        .where('id', option.id)
        .del()
      res['data'] = affectedRows
      yield response.send(res)
    }
  }
}

module.exports = ContentsController

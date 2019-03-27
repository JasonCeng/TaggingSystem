'use strict'

const Schema = use('Schema')

class ContentsTableSchema extends Schema {

  up () {
    this.createIfNotExists('contents', (table) => {
      // alter contents table
      table.increments()
      table.string('title')
      table.string('content')
    })
  }

  down () {
    this.table('contents', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = ContentsTableSchema

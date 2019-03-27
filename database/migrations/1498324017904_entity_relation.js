'use strict'

const Schema = use('Schema')

class EntityRelationTableSchema extends Schema {

  up () {
    this.createIfNotExists('entity_relation', (table) => {
      // alter entity_relation table
      table.increments()
      table.string('content1')
      table.string('content2')
      table.string('relay')
      table.string('sentence')
      table.integer('content_id')
    })
  }

  down () {
    this.table('entity_relation', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = EntityRelationTableSchema

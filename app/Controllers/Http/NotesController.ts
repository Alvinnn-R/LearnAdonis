import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Note from 'App/Models/Note'

export default class NotesController {
// crud notes rest api reference mas dwiki/aira techno 
  public async index({ response }: HttpContextContract) {
  const notes = await Database.from('notes')
    return response.json({
      data: {
        notes : notes
        }
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const { tittle, content} = request.body()
    await Note.create({
      tittle: tittle,
      content: content
    })
    return response.json({
      massage: "Succes insert note"
    })
  }

  public async show({ params, response}: HttpContextContract) {
    const {id} = params
    const note = await Note.query()
    .where({id: id})
    .firstOrFail()

    return response.json({
      data: {
        note: note
      }
    })
  }

  public async edit({}: HttpContextContract) {}

  public async update({request , params, response}: HttpContextContract) {
    // get body request
    const { tittle, content} = request.body()
    // get params
    const {id} = params
    // get exist note data
    const note = await Note.query()
    .where({id: id})
    .firstOrFail()

    // update query (typing 1)
    note.merge({
      tittle: tittle,
      content: content
    }) .save()

    /*
    // update query (typing 2)
    note.tittle = tittle 
    note.content = content
    note.save()

    // update query (typing 2)
    await Note.query()
    .where({id: id})
    .update({
      tittle: tittle,
      content: content
    })
    */

    return response.json({
      message: 'Succes update data note'
    })
  }

  public async destroy({params, response}: HttpContextContract) {
    const {id} = params

    const note = await Note.query()
    .where({id: id})
    .firstOrFail()

    await note.delete()

    return response.json({
      message: 'Succes delete data note'
    })
  }
}

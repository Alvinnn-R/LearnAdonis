import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Note from 'App/Models/Note'

export default class extends BaseSeeder {
  public async run () {
    //delete exist seeder Notes
    await Note.query().delete()
    // insert new seeder Notes
    await Note.create({
      tittle: 'Sekolah',
      content: 'Belajar Inggris'
    })
    for (let index = 1; index < 8; index++) {
    await Note.create({
      tittle: `tittle ${index}`,
      content: `content ${index}`
    })
    }
  }
}

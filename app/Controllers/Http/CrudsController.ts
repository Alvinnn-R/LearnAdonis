// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Post from "App/Models/Post";
// import { schema } from "@ioc:Adonis/Core/Validator";


export default class CrudsController {

    public async index({ request, response, view }) {
        const posts = await Post.all()

        return view.render('posts.index', { posts: posts.rows })
    }


}

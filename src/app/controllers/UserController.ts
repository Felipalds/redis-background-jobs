import { Request, Response } from "express"
import Mail from "../lib/Mail"
import { User } from "../interfaces/IUser"
import mailQueue from "../lib/Queue"

export default {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user:User = {
            name,
            email,
            password
        }

        await mailQueue.add({ user })


        return res.json(user)
    }
}
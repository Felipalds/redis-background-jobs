import { Request, Response } from "express"
import Mail from "../lib/Mail"
import { User } from "../interfaces/IUser"

export default {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user:User = {
            name,
            email,
            password
        }


        return res.json(user)
    }
}
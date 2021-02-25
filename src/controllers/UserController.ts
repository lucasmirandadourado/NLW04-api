import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const useRepositoy = getCustomRepository(UsersRepository);
        const userAlreadyExists = await useRepositoy.findOne({
            email
        });
        
        if(userAlreadyExists) {
            return response.status(400).json({
                error:'User already exists!'
            });
        }
        const user = useRepositoy.create({
            name, email
        });
        await useRepositoy.save(user);

        return response.status(201).json(user);
    }

}

export { UserController };

import {userModel} from '../model/user.model.js'

class UserService{
    async getAll(){
        return await userModel.find()
    }

    async getById(id){
        return await userModel.findById(id)
    }

    async getByEmail(email){
        return await userModel.findOne({email})
    }

    async create(user){
        return await userModel.create(user)
    }

    async update(id,newBody){
        return await userModel.updateOne({_id:id},newBody)
    }

    async deleteOne(id){
        return await userModel.deleteOne({_id:id})
    }
}

export default new UserService;
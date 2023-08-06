import {ProviderUser} from "../models/Provider.js";

export const createProvider = async (req, res) => {
    const {name, address, telephone, price, isCansel, photo, weight} = req.body




    try {


        const provider = new ProviderUser({name, address, telephone, price, isCansel, photo, weight})
        await provider.save()
        console.log({message: "provider created"})
        res.json({message: "provider created"})

    } catch (error) {
        res.status(404).json({error: error})
    }

}


export const getProvides = async (req, res) => {
    try {
        const providers = await ProviderUser.find()
        console.log({providers: providers})

        const {name , address , telphone , price , isCansel} = providers


        return res.json({providers})
    } catch (error) {
        return res.status(404).json({error: error})
    }
}


export const searchProvider =  async (req , res) => {
    const {name} = req.params
    try{
        const provider = await ProviderUser.find({name:name})
        if(!provider) throw ({error: "cliente no encontrado"})
        return res.json({provider: provider})
    }catch(error){
        return res.status(401).json({error: error.message})
    }
}
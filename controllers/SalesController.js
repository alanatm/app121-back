//importar modelo
import SalesModel from "../models/SalesModel.js";

// metodos para el CRUD


//Mostrar todos los registros
export const getAllSales= async(req, res)=>{
    try {
       const sales = await SalesModel.findAll()
       res.json(sales)
    } catch (error) {
        res.json ({message: error.message})
    }
}

//mostrar un registro por id
export const getsale = async (req,res)=>{
    try {
        const sale = await SalesModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json (sale[0])
    } catch (error) {
        res.json ({message: error.message})
    }

}

//Crear un Registro
export const createSale = async (req, res) =>{
    try {
      await  SalesModel.create(req.body);
      res.json ({
        "message": "¡Registro creado correctamente!"
      })
    } catch (error) {
        res.json ({message: error.message})
    }
}

//Actualizar un registro
export const updateSale = async (req, res) =>{
    try {
        await SalesModel.update(req.body,{
            where: {id: req.params.id} //OJO AQUI POR SI NO FUNCIONA
        })
        res.json ({
            "message": "¡Registro actualizado correctamente!"
          })
    } catch (error) {
        res.json ({message: error.message})
    }
}

//Eliminar un registro
export const deleteSale = async(req, res) =>{
    try {
         await SalesModel.destroy({
            where: {id: req.params.id}
        })
        res.json ({
            "message": "¡Registro eliminado correctamente!"
          })
    } catch (error) {
        res.json ({message: error.message})
    }
}
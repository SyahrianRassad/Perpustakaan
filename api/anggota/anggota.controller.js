const {
    add,
    get,
    getId,
    update,
    del
} = require('./anggota.service')
const db = require('../../config/connection')

module.exports={
    //body : kd_anggota, nama, alamat, tlpn
    controllerAdd:(req,res)=>{
        const data_anggota ={
            nm_anggota : req.body.nama,
            alamat : req.body.alamat,
            tlpn : req.body.tlpn
        }

        add(data_anggota,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.status(200).json({
                    succes:1,
                    data : results,
                    data_anggota
                })
            }
        })
    },

    controllerGet:(req,res)=>{
        get((err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    succes:1,
                    data:results
                })
            }
        })
    },

    //body : kd_anggota
    controllerGetId:(req,res)=>{
        const body = req.body.kd_anggota
        getId(body,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    succes:1,
                    data:results
                })
            }
        })
    },

    controllerUpdate:(req,res)=>{
        data_anggota = {
            kd_anggota : req.body.kd_anggota,
            nm_anggota : req.body.nama,
            alamat : req.body.alamat,
            tlpn : req.body.tlpn
        }
        
        update(data_anggota,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success : 0,
                    message : "Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },

    controllerDelete:(req,res)=>{
        const body = req.body.kd_anggota
        del(body,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    succes:0,
                    message:"not found"
                })
            }else{
                return res.json({
                    succes:1,
                    message:"Delete Succes"
                })
            }
        })
    }
}
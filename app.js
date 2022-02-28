require('dotenv').config()
const express=require('express')
const app=express()
const anggota=require('./api/anggota/anggota.router')
const petugas=require('./api/petugas/petugas.router')
const buku=require('./api/buku/buku.router')
const pinjam=require('./api/pinjam/pinjam.router')

app.use(express.json())
app.use("/api/anggota", anggota)
app.use("/api/petugas",petugas)
app.use("/api/buku",buku)
app.use("/api/pinjam",pinjam)

app.listen(process.env.APP_PORT,()=>{
    console.log("Tersambung di PORT : "+ process.env.APP_PORT)
})


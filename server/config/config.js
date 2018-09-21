
//Puerto

process.env.PORT =process.env.PORT ||3000;
//Entorno
process.env.NODE_ENV=process.env.NODE_ENV || 'dev';


//Vencimiento del token
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60*24*30;

//seed de autenticacion
process.env.SEED=process.env.SEED||'este-es-el-seed-desarrollo'


//BASE DE DATOD

let urlDB;
if(process.env.NODE_ENV==='dev'){
    urlDB='mongodb://localhost:27017/cafebar'
}else{

    urlDB=process.env.MONGO_URI;
}
process.env.URLDB=urlDB;
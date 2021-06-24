import { Injectable } from '@angular/core';
import {insumos} from '../models/insumos';
import {fechas} from '../private/common/fechas'

@Injectable()
export class variablesGlobales{
    public insumoAeditar:insumos
    public titulo:string
    public isLogin:boolean
    public accion:string
    public dateBefore:Date
    public dateAfter:Date
    public uso:string
    public id:string
    public nombre:string
    public rutaPagina:string
    
    
    constructor(private _fechas:fechas){}

    getRutaPagina(){
        let data = this.rutaPagina
        this.rutaPagina= ""
        return data
    }

    getNombre(){
         let data = this.nombre
        this.nombre= ""
        return data
    }


    getId(){
        let data = this.id
        this.id= ""
        return data
    }
     
    getUso(){
        let data = this.uso
        this.uso= ""
        return data
    }

    getAccion(){
        return this.accion
    }

    getisLogin(){
        let data = this.isLogin
        this.isLogin= false
        return data
    }

    getTitulo(){
        let data = this.titulo
        this.titulo=""
        return data
    }

    getdateBefore(){
      return this._fechas.ChangeDateFormat(this.dateBefore)
    }

    getdateAfter(){
     return this._fechas.ChangeDateFormat(this.dateAfter)
    }
}
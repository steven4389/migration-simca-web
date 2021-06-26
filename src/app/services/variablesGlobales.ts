import { Injectable } from '@angular/core';
import {insumos} from '../models/insumos';
import Fechas from '../private/common/Fechas'

@Injectable()
export class variablesGlobales extends Fechas{
    // public insumoAeditar:insumos
    public titulo:string = '';
    public isLogin:boolean =false;
    public accion:string = '';
    public dateBefore:Date = new Date;
    public dateAfter:Date = new Date;
    public uso:string = '';
    public id:string = '';
    public nombre:string = '';
    public rutaPagina:string = '';
    
    
    constructor(){
        super();
    }

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
      return this.ChangeDateFormat(this.dateBefore)
    }

    getdateAfter(){
     return this.ChangeDateFormat(this.dateAfter)
    }
}
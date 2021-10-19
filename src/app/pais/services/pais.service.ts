import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private BASE_URL:string = 'https://restcountries.com/v3.1';
  get getParams(){
    return  new HttpParams()
    .set('fields','name,cca2,ccn3,flags,population,capital')
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{

    const url = `${this.BASE_URL}/name/${termino}`
    return this.http.get<Country[]>( url,{params:this.getParams} );

  }

  porCapital(termino:string):Observable<Country[]>{

    const url = `${this.BASE_URL}/capital/${termino}`
    return this.http.get<Country[]>( url, {params:this.getParams} );

  }

  getPaisPorAlpha(id:string):Observable<Country[]>{
    const url = `${this.BASE_URL}/alpha/${id}`
    return this.http.get<Country[]>( url );

  }

  buscarRegion(region:string):Observable<Country[]>{
    
    const url = `${this.BASE_URL}/region/${region}`
    return this.http.get<Country[]>( url, {params:this.getParams}).pipe(tap(console.log));
  }

}

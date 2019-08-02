import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { Product} from './model/product';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {ResponseApi} from "./model/response-api";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://apiRest/products';
  private apiCat = 'http://apiRest/categories';
  private apiProdByCat = 'http://apiRest/category/products';
  private categories: Observable<object[]>;
  private JSONHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient){
  }
  /**
   * Recupere les produits de l'API
   */
  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(
        tap(products => console.log(products.length + ' produits reçus de l\'API')),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Erreur front : ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Erreur de l'API : ${error.status}, ` +
        `contenu: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
  public getProduct(slug: string): Observable<Product | null> {
    return this.http.get<Product>(this.apiUrl + '/' + slug)
      .pipe(
        tap(product=>console.log(product.name)),
        catchError((error: HttpErrorResponse) => {
          if(error.status === 404){
            return of(null);
          } else {
            this.handleError(error);
          }
        }));
  }
  public getCategories(): Observable<object[]> {
   return this.http.get<object[]>(this.apiCat)
     .pipe(
       tap(),
       catchError(this.handleError));
  }
  public getProductsByCat(idCat: number): Observable<object[]> {
    return this.http.get<object[]>(this.apiProdByCat + '/' + idCat);
  }

  /**
   * Envoie le produit à l'API pour l'insertion en BDD
   * @param product
   */
  create(product: Product): Observable<ResponseApi> {
    product.updateSlug();
    return this.http.post<ResponseApi>(this.apiUrl, product, this.JSONHeaders).pipe(
      tap(datas=> console.log('Retour API (creation produit) :' + datas))
    );
  }
  delete(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(this.apiUrl + '/' + id, this.JSONHeaders).pipe(
      tap(datas=> console.log('Retour API (Suppression produit) :')),
      tap(datas=>console.log(datas))
    );
  }
}

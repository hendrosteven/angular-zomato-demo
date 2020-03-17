import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  
  baseUrl = "https://developers.zomato.com/api/v2.1";
  public selectedRestaurant: any;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'user-key': '976c88650426fe9860824e1a42bfe528'
    })
  }

  getRestaurantsByCity(cityId: number): Observable<any>{
    return this.http.get<any>(this.baseUrl+'/search?entity_id='+cityId+'&entity_type=city',this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getRestaurantByQuery(query: string):Observable<any>{
      return this.http.get<any>(this.baseUrl+'/search?q='+query,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(this.baseUrl+'/categories', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

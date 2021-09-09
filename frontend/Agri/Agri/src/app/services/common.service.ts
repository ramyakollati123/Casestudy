import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Crop } from '../models/crop';
import { retry, catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class CommonService {
 
  constructor(private http: HttpClient) {}

  getAllCrops(): Observable<Crop[]> {
    return this.http.get<Crop[]>(`localhost:4200/crops/getAll/crops`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  
  addNewCrop(crop: Crop): Observable<{ status: boolean; cropId: string }> {
    return this.http.post<Crop>(`/crops/save/crops`, crop).pipe(
      map((newCrop: Crop) => {
        return {
          status: true,
          cropId: newCrop.roomNo,
        };
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateCrop(
    updatedCrop: Crop
  ): Observable<{ status: boolean; cropId: string }> {
    return this.http.put(`localhost:4200/crops/update/crops`, updatedCrop).pipe(
      map((data: any) => {
        console.log(`data updated in put uirl ${data}`);
        return {
          status: true, 
          cropId: updatedCrop.roomNo,
        };
      })
    );
  }


  deleteCrop(crop: Crop) {
    return this.http.delete(`localhost:4200/crops/deletecrops/byid/${crop.id}`).pipe(
      retry(2),
      map((newCrop: any) => {
        return {
          status: true,
          remarks: newCrop,
        };
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  

}
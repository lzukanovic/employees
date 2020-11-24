import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IEmployee } from '../shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    // baseUrl: string = "http://dummy.restapiexample.com/api/v1";
    // baseUrl: string = "http://localhost:8081/api";
    baseUrl: string = "/api";
    
    constructor(private http: HttpClient) { }

    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(`${this.baseUrl}/employees`).pipe(
            map((resArr: IEmployee[]) => {
                resArr.map((employee: IEmployee) => {
                    employee.age = this.dateDiffInYears(employee.birthday, new Date());
                });
                return resArr;
            }),
            catchError(this.handleError)
        );
    }

    getEmployee(id: number): Observable<IEmployee> {
        return this.http.get<IEmployee>(`${this.baseUrl}/employees/${id}`).pipe(
            map((res: IEmployee) => {
                res.age = this.dateDiffInYears(res.birthday, new Date());
                return res;
            }),
            catchError(this.handleError)
        );
    }

    createEmployee(employee: IEmployee): Observable<IEmployee> {
        return this.http.post<IEmployee>(`${this.baseUrl}/employees`, employee).pipe(
            map((res: IEmployee) => {
                res.age = this.dateDiffInYears(res.birthday, new Date());
                return res;
            }),
            catchError(this.handleError)
        );
    }

    updateEmployee(employee: IEmployee): Observable<any> {
        // const httpOptions = {
        //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        // };

        return this.http.put(`${this.baseUrl}/employees/${employee.id}`, employee).pipe(
            catchError(this.handleError)
        );
    }

    deleteEmployee(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/employees/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private dateDiffInYears(dateoldVal: Date, datenew: Date): number {
        const dateold = new Date(dateoldVal)
        const ynew = datenew.getFullYear();
        const mnew = datenew.getMonth();
        const dnew = datenew.getDate();
        const yold = dateold.getFullYear();
        const mold = dateold.getMonth();
        const dold = dateold.getDate();
        let diff = ynew - yold;
        if (mold > mnew) diff--;
        else {
            if (mold == mnew) {
                if (dold > dnew) diff--;
            }
        }
        return diff;
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage: string;
        
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.          
            console.error(errorMessage);

            errorMessage = 'An error occurred:' + error.error.message;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);

            switch (error.status) {
                case 400: {
                    errorMessage = `Bad request: Please check if all fields are valid.`;
                    break;
                }
                case 404: {
                    errorMessage = `Not Found: Employee was not found. Please provide a valid ID.`;
                    break;
                }
                case 403: {
                    errorMessage = `Access Denied: ${error.message}`;
                    break;
                }
                case 500: {
                    errorMessage = `Internal Server Error: ${error.message}`;
                    break;
                }
                default: {
                    errorMessage = `Unknown Server Error: ${error.message}`;
                    break;
                }
            }
        }
        // Return an observable with a user-facing error message.
        return throwError(errorMessage);
    }

}

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class BaseRestService {

	constructor(private http: HttpClient) { }

	baseUrl = environment.baseUrl;

	getUrl(serviceUrl: string): string {
		return this.baseUrl + serviceUrl;
	}

	getter<T>(serviceUrl: string): Observable<T> {
		return this.http.get(this.getUrl(serviceUrl)).pipe(map((res: any) => res));
	}

	delete<T>(serviceUrl: string): Observable<any> {
		return this.http.delete(this.getUrl(serviceUrl));
	}

	post<T>(serviceUrl: string, objeto: any): Observable<T> {
		return this.http.post(this.getUrl(serviceUrl), objeto).pipe(map((res: any) => res));
	}

	put<T>(serviceUrl: string, objeto: any): Observable<T> {
		return this.http.put(this.getUrl(serviceUrl), objeto).pipe(map((res: any) => res));
	}

}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Capacity} from '../models/capacity.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CapacitiesService {

    constructor(private http: HttpClient) {
    }

    public list(): Observable<Capacity[]> {
        return this.http.get<Capacity[]>('http://localhost:3000/capacities');
    }

    public getById(capacityId: number): Observable<Capacity> {
        return this.http.get<Capacity>(`http://localhost:3000/capacities/${capacityId}`);
    }
}

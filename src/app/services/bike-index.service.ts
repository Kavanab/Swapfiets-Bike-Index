import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Bike} from "../model/bike.model";
import {BikeListSearchCriteria, toRequestParams} from "../model/search-criteria.model";

@Injectable({
    providedIn: "root",
})
export class BikeIndexService {

    private baseUrl: string = "https://bikeindex.org:443/api/v3";
    
    constructor(private http: HttpClient) {}

    searchBikes(searchCriteria: BikeListSearchCriteria): Observable<Bike[]> {
        const url = `${this.baseUrl}/search`;
        return this.http.get<Bike[]>(url, {params: toRequestParams(searchCriteria)});
    }
}

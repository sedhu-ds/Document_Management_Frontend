import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngestionService {
  private apiUrl = 'http://<ec2-public-ip>:8000';

  constructor(private http: HttpClient) {}

  getIngestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ingestions/`);
  }

  triggerIngestion(documentId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/ingestions/trigger/${documentId}`, {});
  }
}
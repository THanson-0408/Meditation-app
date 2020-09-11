import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MeditationService {
  baseUrlMeditations: string = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}
}

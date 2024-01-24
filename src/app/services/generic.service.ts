import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

export class GenericService<T> {
  url = environment.apiUri;
  http!: HttpClient;

  constructor(http: HttpClient, urlinput: string) {
    this.http = http;
    this.url = urlinput;
  }
  /***
   * Get all
   */
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  /**
   * Create an item
   */
  create(item: T): Observable<T> {
    return this.http.post<T>(this.url, item);
  }

  /**
   * Put an item
   */
  update(item: T, id: string): Observable<T> {
    return this.http.put<T>(this.url + id, item);
  }

  /**
   * Delete item by id.
   * @param itemId item id to delete
   */
  delete(itemId: string) {
    return this.http.delete<T>(this.url + itemId);
  }
}

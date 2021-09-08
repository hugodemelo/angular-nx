import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from '@angular-nx/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  readonly #API_ENDPOINT = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {
  }

  all() {
    return this.http.get<Widget[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  create(widget: Widget) {
    return this.http.post(this.getUrl(), widget);
  }

  update(widget: Widget) {
    return this.http.put(this.getUrlWithId(widget.id!), widget);
  }

  delete(widget: Widget) {
    return this.http.delete(this.getUrlWithId(widget.id!));
  }

  private getUrl() {
    return `${ this.#API_ENDPOINT }/widgets`;
  }

  private getUrlWithId(id: string) {
    return `${ this.getUrl() }/${ id }`;
  }
}

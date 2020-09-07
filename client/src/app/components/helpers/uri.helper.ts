import { Injectable } from "@angular/core";

export class UriHelper {
  public static generateParamsFromIds(ids: string[]): string {
    return `${ids.join(",")}`;
  }
}

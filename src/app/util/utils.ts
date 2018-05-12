import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
export class Utils {

  /**
   * cria cópia de um valor para retirar qualquer referência ao mesmo
   * @param data
   * @returns {any}
   */
  public static createCopy(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }

  /**
   * Usado nos testes com o Jasmine para utualizar o HTML da página
   * @param ids
   * @param fixture
   * @param id
   * @returns {Map<string, DebugElement>}
   */
  public static updateHTML(ids: any, fixture: any): Map<string, DebugElement> {
    fixture.detectChanges();
    const deAll: Map<string, DebugElement> = new Map();
    for ( const i of Object.keys(ids) ) {
      deAll.set(ids[i], fixture.debugElement.query(By.css(ids[i])));
    }
    return deAll;
  }
}

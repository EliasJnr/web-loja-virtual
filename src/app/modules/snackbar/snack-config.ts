export class SnackConfig {
  public title: string;
  public message: string;
  public extraClass: string;
  public duration: number;
  public action: string;

  constructor() {
    this.title = undefined;
    this.message = undefined;
    this.extraClass = undefined;
    this.duration = undefined;
    this.action = undefined;
  }
}

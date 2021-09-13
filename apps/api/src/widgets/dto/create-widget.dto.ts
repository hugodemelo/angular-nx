import { Widget } from '../entities/widget.entity';

export class CreateWidgetDto implements Widget {
  constructor(public id: string,
              public title: string,
              public description: string) {
  }
}

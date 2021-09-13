import { Injectable } from '@nestjs/common';
import { Widget } from './entities/widget.entity';
import { v4 } from 'uuid';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@Injectable()
export class WidgetsService {

  #widgets: Widget[] = [
    { id: v4(), title: 'Nest mock widget 01', description: 'Mock description...' },
    { id: v4(), title: 'Nest mock widget 02', description: 'Mock description...' },
    { id: v4(), title: 'Nest mock widget 03', description: 'Mock description...' }
  ];

  findAll() {
    return this.#widgets;
  }

  findOne(id: string) {
    return this.#widgets.find(widget => widget.id === id);
  }

  create(createWidgetDto: CreateWidgetDto) {
    this.#widgets = [ ...this.#widgets, { ...createWidgetDto, id: v4() } ];
    return this.#widgets;
  }

  update(id: string, updateWidgetDto: UpdateWidgetDto) {
    this.#widgets = this.#widgets.map(wid => wid.id === id ? updateWidgetDto : wid);
    return this.#widgets;
  }

  remove(id: string) {
    this.#widgets = this.#widgets.filter(widget => widget.id !== id);
    return this.#widgets;
  }
}

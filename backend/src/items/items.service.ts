import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dtos/create-item.dto';
import { ItemDto } from './dtos/item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';

@Injectable()
export class ItemsService {
  private items: ItemDto[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of item 1',
    },
  ];
  private currentId = this.items.length + 1;

  findAll(): ItemDto[] {
    return this.items;
  }

  create(item: CreateItemDto): ItemDto {
    const newItem: ItemDto = { ...item, id: this.currentId++ };
    this.items.push(newItem);
    return newItem;
  }

  findOne(id: number): ItemDto {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto): ItemDto {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    const updatedItem = { ...this.items[itemIndex], ...updateItemDto };
    this.items[itemIndex] = updatedItem;
    return updatedItem;
  }

  delete(id: number): ItemDto {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return this.items.splice(index, 1)[0];
  }
}

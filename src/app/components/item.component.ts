import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Item } from '../entity/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    TableModule,],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    alert("hey")
    this.itemService.getItems().subscribe((data) => (this.items = data));
  }}

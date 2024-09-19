import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ItemComponent } from './components/item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from './entity/item';
import { ItemService } from './services/item.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,ItemComponent,
    
    
    HttpClientModule, // Ensure this is included
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    alert("hey")
    this.itemService.getItems().subscribe((data) => (this.items = data));
  }}

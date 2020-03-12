import { Component, NgModule, VERSION, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wehave',
  templateUrl: './wehave.component.html',
  styleUrls: ['./wehave.component.css']
})
export class WehaveComponent implements OnInit {
  snapshotparam: string;
  subscribedparam: string;
  selectedgames: { name: string; id: number; selected: boolean; }[];
  name: string;
  searchText: string;
  selectedcount = 0;


  // Data Object to List Games
  games = [
    {
      name: 'Chess',
      id: 1,
      selected: true
    },
    {
      name: 'Ludo',
      id: 2,
      selected: false
    },
    {
      name: 'Snakes & Ladders',
      id: 3,
      selected: false
    },
    {
      name: 'Carrom',
      id: 4,
      selected: false
    },
    {
      name: 'Scrabble',
      id: 5,
      selected: false
    },
    {
      name: 'Monopoly',
      id: 6,
      selected: true
    },
    {
      name: 'Uno',
      id: 7,
      selected: false
    }
  ];

  constructor(private router: Router, private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
    this.name = `Angular! v${VERSION.full}`;
    this.getSelected();
  }

  ngOnInit(): void {
  }
  getSelected() {
    this.selectedgames = this.games.filter(s => {
      return s.selected;
    });
    this.selectedcount = this.selectedgames.length;
  }

  clearSelection() {
    this.searchText = '';
    this.games = this.games.filter(g => {
      g.selected = false;
      return true;
    });
    this.getSelected();
  }

  deleteGame(id: number) {
    this.searchText = '';
    this.games = this.games.filter(g => {
      if (g.id === id) {
        g.selected = false;
      }

      return true;
    });
    this.getSelected();
  }

  clearFilter() {
    this.searchText = '';
  }
}

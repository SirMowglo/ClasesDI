import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditPeopleDialogComponent } from 'src/app/dialogs/edit-people-dialog/edit-people-dialog.component';
import { NewPeopleDialogComponent } from 'src/app/dialogs/new-people-dialog/new-people-dialog.component';
import { Film } from 'src/app/interfaces/film.interface';
import { People } from 'src/app/interfaces/people.interface';
import { FilmService } from 'src/app/services/film.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: People[] =[];
  
  filmList: Film[]=[];

  constructor(private PeopleService: PeopleService, private FilmService: FilmService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getPeopleList(1);
    this.getPeopleList(2);
    this.getFilmList();
  }
  
  public getPeopleList(page: number){
    this.PeopleService.getPeopleList(page).subscribe(resp=>{
      this.peopleList.push(...resp.results);
    })
  }
  
  public getFilmList(){
    this.FilmService.getFilmList().subscribe(resp=>{
      this.filmList = resp.results;
    })
  }
  
  public getFilmTitles(url: string){
    let filmTitle = '';
    
    for(let i =0; i<this.filmList.length; i++){
      if(this.filmList[i].url === url){
        filmTitle= this.filmList[i].title;
      }
    }
    
    return filmTitle;
  }
  handleMissingImage($event: ErrorEvent) {
    ($event.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

  public newPeople(){
    this.dialog.open(NewPeopleDialogComponent);
  }
}

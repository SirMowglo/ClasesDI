import { Component, OnInit } from '@angular/core';
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
  constructor(private PeopleService: PeopleService, private FilmService: FilmService) { }

  ngOnInit(): void {
    this.getPeopleList();
    this.getFilmList();
  }

  public getPeopleList(){
    this.PeopleService.getPeopleList().subscribe(resp=>{
      this.peopleList = resp.results;
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
}

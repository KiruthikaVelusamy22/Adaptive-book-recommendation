import { Component, OnInit } from '@angular/core';
import {book} from '../Models/Book_pref';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-resisteruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  Pref: book[];
  constructor(private router:Router,) { }
  pref=[]
  
  List:Array<string>=[];
  genre=''
  
  //mystery not getting pushed in genre

  getPref(genre:string){
    console.log("$$$$$$$$$$$$$$$$$$$$$$$",genre)
    this.List.push(genre);
    console.log('List', this.List);
    this.genre = this.List.join(',')
    console.log('List', this.genre);
    return this.genre

  }
  print(){
  console.log('genre',this.genre);
  }
  
  LoadRegister2(userName:string){
    
    localStorage.setItem('genre',this.genre);
    localStorage.setItem('user',userName);

    this.router.navigate(['Register2']);
  }
  ngOnInit() {
    this.Pref = ([
      {
        "genre_Type": "Romance",
        "img": "../../assets/images/logos/Romance.JPG",
        
      },
      {
      
        "genre_Type": "Science Fiction",
        "img": "../../assets/images/logos/Science-fiction.jpg",
      },
      {
        
        "genre_Type": "Humor",
        "img": "../../assets/images/logos/Humour.JPG",
        
      },
      {
        "genre_Type": "Mystery",
        "img": "../../assets/images/logos/Mystery.jpg",
      },
      {
        "genre_Type": "Adventure",
        "img": "../../assets/images/logos/adventure.jpg",
      }
    ]);

    this.print();
  }
  }



import { Component, OnInit } from '@angular/core';
import {book} from '../Models/Book_pref';
import {bookList} from '../Models/bookList';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resource } from 'selenium-webdriver/http';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  Pref: book[];
listofBooks: bookList[];
  constructor(private router:Router,private httpClient: HttpClient) { }
  pref=[]
  data:any
  img1:string[]
  array:any[]
  Genre:any[]
  GenreKeys:any[]
  GenreList0:any[]
  GenreList1:any[]
  genreList=''
  merged:any;
  Details:JSON
  cardList:Array<string>=[];
  size:string
  bookList:string[]
  public objKeys = Object.keys;
  public objValues = Object.values;
  userLinkedbooks:Array<string>=[];
  userLinedBooksVector=''
  usernameDB:string
  getAllbooks() {
    // debugger;
    console.log(this.genreList);
    return this.httpClient.get('http://127.0.0.1:5030/top/'+this.genreList) .subscribe(data =>{
      this.data = JSON.parse(JSON.stringify(data))
     this.array=this.data.genre
    this.GenreKeys=Object.keys(this.array)
    this.img1 = []
      for(let item in this.Pref) {
        let entry1 = this.Pref[item].genre_Type
        for(let entry in this.array) {
          if(entry==entry1) {
          this.img1.push(this.Pref[item].img)
          console.log('list',this.img1)
          
        
        }
      }
     
    }
   
   
     this.Genre=Object.values(this.array)
     this.GenreList0=this.Genre[0]
     this.GenreList1=this.Genre[1]
     this.bookList=[]
     for(let item in this.Genre) {
      console.log("item",item)
       let bookarray=[]
      bookarray = this.Genre[item]
      console.log("entry1",bookarray)
      for(let i in bookarray) {
        let bookname=bookarray[i]
        console.log('book',bookname)
        
        this.bookList.push(bookname)
        console.log('bookList',this.bookList)
        
        
        
      
      }
    }
   
  


     
     
     
    //  console.log(this.GenreKeys)

    //   console.log(this.data);
    })
}
toggle = true;
status = 'Enable';
proceedToHome(book){
  this.toggle = !this.toggle;
  this.status = this.toggle ? 'Enable' : 'Disable';
   console.log("book", book)
  this.userLinkedbooks.push(book);
  console.log('List', this.userLinkedbooks);
  this.userLinedBooksVector = this.userLinkedbooks.join(", ")
  console.log('List', this.userLinedBooksVector);
    this.httpClient.get('http://127.0.0.1:5030/store/'+this.usernameDB+'/'+this.userLinedBooksVector ).subscribe(
      res => {
          const response = res
      }
  );

  
}

LoadHome(){
  this.router.navigate(['Mood']);
}
   ngOnInit() {

    this.genreList=localStorage.getItem("genre");
    this.usernameDB=localStorage.getItem('user');
    console.log('username',this.usernameDB)
   this.cardList=this.genreList.split(",")
   console.log('cardList',this.cardList)

  

   
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
 
        "genre_Type": "Humour",
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

   
  this.getAllbooks()
  
    
}
}
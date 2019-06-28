import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private httpClient: HttpClient) { }
  data:any=[]
  Mood:string;
  userName=''
  ngOnInit() {
    this.Mood=localStorage.getItem('Mood')
    this.userName=localStorage.getItem('user')
    this.getAllbooks();
  }

  getAllbooks() {
    return this.httpClient.get('http://127.0.0.1:5030/recommendation/'+this.userName+'/'+this.Mood).subscribe(data => {
      this.data = data ;
      console.log(this.data);
    })
  }
  ViewDetails(Book) {
    localStorage.setItem('Book',Book)
    this.router.navigate(['ViewDetails']);
  }

}

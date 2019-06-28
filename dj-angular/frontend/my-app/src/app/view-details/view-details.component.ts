import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private router:Router,private httpClient: HttpClient) { }
  data:any=[]
  
  bookname=''

  ngOnInit() {
    this.bookname=localStorage.getItem('Book')
    this.getbookName(this.bookname)
  }
  LogoutUser() {
    this.router.navigate(['userLogin']);
  }
  getbookName(bookname) {
    return this.httpClient.get('http://127.0.0.1:5030/bookInfo/'+bookname).subscribe(data => {
      this.data = data
      console.log(this.data);
    })
  }


}

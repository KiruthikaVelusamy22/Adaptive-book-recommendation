import { Component, OnInit } from '@angular/core';
import {Mood} from '../Models/Mood';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mood-of-day',
  templateUrl: './mood-of-day.component.html',
  styleUrls: ['./mood-of-day.component.css']
})
export class MoodOfDayComponent implements OnInit {

  constructor(private router:Router) { }
  user_Mood: Mood[];
  List:Array<string>=[];
  mood:string;
  getMood(mood:string){
    console.log("$$$$$$$$$$$$$$$$$$$$$$$",mood)
    this.mood=mood;

    return this.mood

  }
  print(){
  console.log('List', this.mood);
  }
  LoadHome(){
    localStorage.setItem('Mood',this.mood);
    this.router.navigate(['home']);
  }
  
  ngOnInit() {
    this.user_Mood = ([
      
      {
      
        "mood_Type": "Sadness",
        "img": "../../assets/images/logos/Sadness.jpg",
      },
      {
        
        "mood_Type": "Anger",
        "img": "../../assets/images/logos/Angry.jpg",
        
      },
      {
        "mood_Type": "Joy",
        "img": "../../assets/images/logos/Joy2.jpg",
        
      },
      {
        "mood_Type": "Fear",
        "img": "../../assets/images/logos/Fear.jpg",
      },
      {
        "mood_Type": "Disgust",
        "img": "../../assets/images/logos/Disgust.jpg",
      }
    ]);
  }
    
 

}

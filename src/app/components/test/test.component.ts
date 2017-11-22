import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questionsData = [
    {
      "question": "what is 2 + 2 ?",
      "options": [
        "6",
        "2",
        "3",
        "4"
      ],
      "answer": "4",
      "useranswer" : ""
    },
    {
			"question": "Which is the largest country in the world by population?",
			"options": ["India", "USA", "China", "Russia"],
      "answer": "China",
      "useranswer" : ""
		},
		{
			"question": "When did the second world war end?",
			"options": ["1945", "1939", "1944", "1942"],
      "answer": "1945",
      "useranswer" : ""
		}
  ];
  show:boolean = true;
  id = -1; 
  question;
  options;
  ans;
  getNextQuestion(){
    this.id = this.id + 1;
    if(this.id<this.questionsData.length){
      this.question = this.questionsData[this.id].question;
      this.options = this.questionsData[this.id].options;
      this.ans = this.questionsData[this.id].answer;
    }else{
      this.id = 0;
    }
  }
  getPrevQuestion(){
    this.id = this.id - 1;
     if(this.id>=0){
       this.question = this.questionsData[this.id].question;
       this.options = this.questionsData[this.id].options;
     }else{
      this.id = 2;
    }
   }
  currentAns;
  rightAns = 0;
  answer(option){
    this.questionsData[this.id].useranswer = option;
    this.currentAns = option;
    if(this.currentAns == this.ans){
      console.log(this.currentAns);
    //  this.rightAns++;
    //  console.log(this.rightAns);
      console.log(this.questionsData[this.id].useranswer);
    }
  }
  result(){
    this.show = false;
    for(let i=0; i<3; i++){
      if(this.questionsData[i].useranswer == this.questionsData[i].answer){
        this.rightAns++;
      }
    }
    //console.log(this.rightAns);
  }
  constructor() { 
    this.getNextQuestion();
  }

  ngOnInit() {
  }

}

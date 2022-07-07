/**
 * Created by i2max-ShinPark on 2022-07-06.
 */

import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} // for storing answers
    correctAnswers = 0 // to show the number of correct answers
    isSubmitted = false // use to show the result
    myQuestions =[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop",
            answers:{
                a:"force:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"

        },
        {
            id:"Question2",
            question:"Which of the file is invaid in LWC component folder ",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"

       },
       {
           id:"Question3",
           question:"Which one of the following is not a directive",
           answers:{
               a:"force:each",
               b:"if:true",
               c:"@track"
           },
           correctAnswer:"c"

               }
    ]



   // used for disabling the submit button
   get allNotSelected(){
       return !(Object.keys(this.selected).length === this.myQuestions.length)
   }

   // for applying dynamic styling to our result
   get isScoredFull(){
       return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success' : 'slds-text-color_error'}`
   }

    // changeHandler get's called on every click on the options
    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const {name, value} = event.target
        // 위를 아래로 줄일 수 있다.
        // const name = event.target.name
        // const value = event.target.value

        this.selected={...this.selected, [name]:value}
    }

    // form submit handler
    submitHandler(event){
        event.preventDefault()
        // this .selected =  {"Question1" : "a", "Question2":"b", "Question3" : "c"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswers", this.correctAnswers)
    }
    // form reset handler
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted =false

    }
}
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
   // Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
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
        console.log("name = ", event.target.name)
        console.log("value = ", event.target.value)
        const {name, value} = event.target
        // 위를 아래로 줄일 수 있다.
        // const name = event.target.name
        // const value = event.target.value

        console.log("{name, value} 1 = ", {name, value})

        console.log("this.selected 1 = ", this.selected)

        // ...는 this.selected 하나씩 출력력
       // {기존에 있던 this.select, event 발생한 select}
        this.selected={...this.selected, [name]:value}
        console.log("{name, value} 2 = ", {name, value})
        console.log("this.selected 2 = ", this.selected)
    }

    // form submit handler
    submitHandler(event){
        //  event.preventDefault() =
        //  a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다.
        //  preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.
        event.preventDefault()
        // this .selected =  {"Question1" : "a", "Question2":"b", "Question3" : "c"}

        // filter는 걸러주는 JS 문법
        // item은 myQuestions의 요소
        // myQuestion에 있는 id값으로 this.selected에 있는 id값을 조회해서 correctAnswer과 동일한지 확인.
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
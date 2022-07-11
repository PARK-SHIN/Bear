/**
 * Created by i2max-ShinPark on 2022-07-08.
 */

import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["John", "Smith", "Nik", "Mike"]

    fetchDetailHandler(){
        // html page에서 h1 태그를 가져옴
        const elem = this.template.querySelector('h1')
        elem.style.border="1px solid red";
        console.log(elem.innerText)

        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })

        /// lwc:manual demo
        // 기본 html 요소에 이 지시어를 추가하여 html 요소를 하위 항목으로 첨부
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>Hey i am a child</p>'
    }
}
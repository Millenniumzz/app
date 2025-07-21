import React, {Component} from "react";

export default class Calender extends Component{
    getDate(){
        const dayNames = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
        const monthNames = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย','ก.ค','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()+ 543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`
    }
    render(){
        return <div>{this.getDate()}</div>
    }
}

import React from "react";
import './products.css';
import { Component } from "react";


export default class Product extends Component{
    data = [
        ['Apple',35],['Banana',25],[ 'Orange',30],['Grape',40],['Pineapple',50],['Watermelon',20]   
    ]
    render(){
        return(
            <table border="1"> 
            <tr><th>ชื่อ</th><th>ราคา</th></tr>
            {this.data.map(d=>{
                return(
                    <tr>
                        <td>{d[0]}</td>
                        <td>{d[1]}</td>
                    </tr>
                )
            })
            }
            </table>
        )
    }
}
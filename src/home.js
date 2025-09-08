import React from "react";

export default function Home(){
    return(
        <p style={{textAlign:"center"}}>
            <h3>ยินดีต้อนรับสู่ React Store</h3>
            รายชื่อ<a href="/products">สินค้า</a>ที่เรามีจำหน่าย <br/>
            แต่ท่านต้องเป็น<a href="/member">สมาชิก</a>ก่อนจึงจะสามารถดูรายละเอียดสินค้าได้<br/>
            หากมีข้อสงสัยกรุณาติดต่อเราได้ที่<a href="/contact">Contact Us</a>
        </p>
    )
}
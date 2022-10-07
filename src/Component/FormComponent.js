import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent =(props)=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false) 

    const inputtitle = (Event) => {     
        setTitle(Event.target.value)
    }
    const inputamount = (Event) => {
        setAmount(Event.target.value)
    }
    const saveitem =(Event) => {
        Event.preventDefault()
        const itemdata ={
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemdata)
        setTitle('')
        setAmount(0)
    }               

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    },[title,amount])

    return (
        <div>
            <form onSubmit={saveitem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputtitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputamount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>

        </div>
    )

}

export default FormComponent;
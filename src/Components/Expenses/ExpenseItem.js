import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Expenses from './Expenses';
import Card from '../UI/Card'
import React,{useState} from 'react'

const ExpenseItem=(props)=>{
    const[Title,SetTitle]=useState(props.title)
    const clickhandler=()=>{
        SetTitle(NewTitle)

    }
    const [NewTitle,SetNewTitle]=useState()
    const ChangeHandler=(event)=>{
        SetNewTitle(event.target.value)


    }
    return(
        <Card>
        <div className='ExpenseItem'>
            <ExpenseDate date={props.date}/>
            
            <div className='ExpenseItem__descriptipn'>
                <h2 className='expense-item'>{ props.title}</h2>
               <div className='expense-item__price'>{props.amount}</div>
            </div>   
        </div>
        <input type='text' value={NewTitle} onChange={ChangeHandler}/>


        <button onClick={clickhandler}>ChangeTitle</button>
        </Card>
    )

}
export default ExpenseItem;
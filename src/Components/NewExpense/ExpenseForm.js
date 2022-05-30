import './ExpenseForm.css'
import React,{useState} from 'react'



const ExpenseForm=(props)=>{
    let [TITLE,SetTITLE]=useState('')
    let [AMOUNT,SetAMOUNT]=useState('')
    let [DATE,SetDATE]=useState()

    const TITLEChangeHandler=(event)=>{
        SetTITLE(event.target.value)
        
        
    }
    const AMOUNTChangeHandler=(event)=>{
        SetAMOUNT(event.target.value)

    }
    const DATEChangeHandler=(event)=>{
       
        SetDATE(event.target.value)

    }
    const Submitbahi=(event)=>{
        event.preventDefault();
        const FormaData={
            ExpenseDate: new Date (DATE),
            Expensetitle:TITLE,
            Expenseamount:AMOUNT,

        }
        console.log(FormaData)

        props.onSaveExpenseData(FormaData)
        SetTITLE('');
        SetAMOUNT('');
        SetDATE('');

    }
    return(
        <form onSubmit={Submitbahi}>
            <div className='controls'>


                <div className='controls1'>
                     <label>New Title</label>
                     <input type='text' value={TITLE} onChange={TITLEChangeHandler}/>
                </div>

                <div className='controls2'>
                     <label>Amount</label>
                     <input type='number' value={AMOUNT} onChange={AMOUNTChangeHandler}/>
                </div>
                <div className='controls3'>
                     <label>Date</label>
                     <input type='date' value={DATE} onChange={DATEChangeHandler}/>
                </div>
            </div>
            <button>New Expense</button>

        </form>
    )
}
export default ExpenseForm;

import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import React,{useState} from 'react'
import ExpenseForm from "../NewExpense/ExpenseForm"
import NewExpense from "../NewExpense/NewExpense"



let Array1=[
    { id:'e1',
      ExpenseDate:new Date(2021, 3,28),
      Expensetitle:'School Fees',
      Expenseamount:'300$',
 }, 
 {    id:'e2',
      ExpenseDate:new Date(2029, 6,28),
      Expensetitle:' Books',
      Expenseamount:'70$',
    }, 

 {    id:'e1',
      ExpenseDate:new Date(2021, 3,28),
      Expensetitle:'Rent',
      Expenseamount:'150$',
 }, ]




 
const Expenses=(props)=>{
    const [Data,SetData]=useState(Array1)




    const Spain=(hamz)=>{
        let Daata= {
            ...hamz,

        }
        const AllData =[Daata,...Array1]
       SetData(AllData)
       console.log(AllData)

    }
     
    
 console.log(props.DATE)
 
    return(
        <div>

           <NewExpense Spain={Spain}/>
       
             <div className="expenses">
                 {
                     Data.map(
                         Expense=>(
                            <ExpenseItem 
                            date={Expense.ExpenseDate}
                            title={Expense.Expensetitle}
                            amount={Expense.Expenseamount}
                            />

                         )
                     )
                 }
        
        
            </div>
         
        </div>

    )
}
export default Expenses
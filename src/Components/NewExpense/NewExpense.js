import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{
    let saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData={
            ...enteredExpenseData,
            id:'e1',
        }
        console.log(ExpenseData);

        props.Spain(ExpenseData)
        

        
        
        
        
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense;
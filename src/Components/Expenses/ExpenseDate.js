const ExpenseDate=(props)=>{
    let month=props.date.toLocaleString('en-US',{month:'long'})
    let year=props.date.getFullYear()
    let day=props.date.toLocaleString('en-US',{day:'2-digit'})
    return(
        <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
        </div>
    )

}
export default ExpenseDate
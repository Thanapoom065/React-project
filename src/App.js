import React, { useEffect , } from 'react';
import Transection from './Component/Transection';
import FormComponent from './Component/FormComponent';
import DataContext from './data/DataContext';
import ReportComponent from './Component/ReportComponent';
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';

function App(){


  const [items,setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [repoetExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    console.log(newItem)
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,repoetExpense])




  return (
    <DataContext.Provider value={{income: reportIncome,expense: repoetExpense}}>
      <div>
        <h1 style={{color:"red"}}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router >
          <div>
            <ul className='Horizontal-menu'>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              
              <Route path="/" element={<ReportComponent />} />

              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transection items={items} />
                  </>
                }
              />

            </Routes>
          </div>
        </Router> 
      </div>
    </DataContext.Provider>
  )
}

export default App;
 
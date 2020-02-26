
import React, { Component } from 'react'
import { UserConsumer } from './userContext'


export default class Dashboard extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (data) =>{
                        console.log(data)
                         return (
                             <>
                         <div>Inside Dashboard component, we found employee name is {data.employee_name} </div>
                         <div>Inside Dashboard component, we found employee age is {data.employee_age} </div>
                         <div>Inside Dashboard component, we found employee salary is {data.employee_salary} </div>
                         </>
                         )
                    }
                
                    
                
                }
            </UserConsumer>
        )
    }
}
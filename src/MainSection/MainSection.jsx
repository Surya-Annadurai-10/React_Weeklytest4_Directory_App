import React from 'react'
import styles from './MainSection.module.css'

const MainSection = () => {
  return (
    <div className={styles.main_con}>
        <h2>Add Person</h2>
         <table>
           <thead>
           <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
           </thead>
           <tbody>
                <tr>
                    <td>Surya</td>
                    <td>10-04-1999</td>
                    <td>826315510386</td>
                    <td>8838401650</td>
                    <td>25</td>
                    <td><a href="">delete</a></td>
                </tr>
           </tbody>
         </table>
    </div>
  )
}

export default MainSection
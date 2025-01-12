import React from 'react'
import styles from './NavSection.module.css'

const NavSection = () => {
  return (
    <div className={styles.buttons}>
        <button>Add Person</button>
        <button>Retrieve Information</button>
    </div>
  )
}

export default NavSection;
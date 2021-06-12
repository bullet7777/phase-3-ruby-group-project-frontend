import React from 'react'
import{ Link } from 'react-router-dom'

const AddNewCategory = () => {
    return (
        <div>
            <Link 
            to={'/category/new'}>
            <button className="new-hero">ADD NEW CATEGORY</button>
            </Link>
        </div>
    )
}

export default AddNewCategory
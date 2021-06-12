import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryLink extends Component {
    

    
 



handleDelete=()=>{
    this.props.handleDelete(this.props.category.id)
}



    render() {
        return (
            <div className="hero-link">
                 <Link
            to={`/categories/${this.props.category.id}`}
            >
            <div>{this.props.category.name}</div>
            </Link>
        
            <button onClick={this.handleDelete}>X</button>
                
            </div>
        )
    }
}
export default CategoryLink

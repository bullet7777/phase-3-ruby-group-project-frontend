
import React, { Component } from 'react'
import AddNewCategory from './AddNewCategory'
import CategoryLink from '../components/CategoryLink'

class Categories extends Component {
    state = {
        categories: [],
     
        
    }

    componentDidMount() {
        

        fetch('http://localhost:9292/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    categories: data
                    
                })
            })
    }

   handleDelete=(id)=>{
        fetch(`http://localhost:9292/categories/${id}`,
         {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            }
        }
        )
        .then(res =>res.json())
        .then(()=> {
        this.setState({
          categories:this.state.categories.filter((category)=>category.id !== id )

        })
          
      })
              
        
    }

    render() {
        const category = this.state.categories.map(d => <CategoryLink key={d.id} category={d} handleDelete={this.handleDelete}/>)
        return (
            <div className="hero-main">
                <h3 className="heroes-list">CATEGORIES</h3>
                <hr />
                <div className="heroes-list">{category}</div>
                <br />
                <br />
                <AddNewCategory />
            </div>
            )
        }
    
}

export default Categories

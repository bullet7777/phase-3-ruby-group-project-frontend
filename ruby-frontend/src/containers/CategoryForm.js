import React, { Component } from 'react'

class CategoryForm extends Component {
    state = {
        name: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

 


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        fetch('http://localhost:9292/categories', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name:this.state.name
                
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
               
                this.props.history.push('/categories')

            })

    }

    render() {
        return (
            <div>

                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label>Category</label><br />
                    <input name="name" type="text" onChange={this.handleChange} value={this.state.name} /><br />
                    <input type="submit" />
                </form>

            </div>
        )
    }
}

export default CategoryForm

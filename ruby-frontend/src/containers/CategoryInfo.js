import React, { Component } from 'react'

class CategoryInfo extends Component {
    state={
        category:{
            name:"",
            avatars:[]

        },
        name:""
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    
    componentDidMount() {
        fetch(`http://localhost:9292/categories/${this.props.match.params.id}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            this.setState({
                category:data
            })

        })
    }
 
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        fetch(`http://localhost:9292/categories/${this.props.match.params.id}`, {
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
                this.setState({
                    category:{
                        ...this.state.category,
                        avatars:[...this.state.category.avatars,data]
                    },
                    name:""
                })
               
            })

    }


    
    render() {
        const avatar=this.state.category.avatars.map(d => <div key={d.id}>{d.name}</div>)
        return (
            
            <div>
                <h2>{this.state.category.name}</h2>
                
                <h4>AVATARS</h4>
                <div>{avatar}</div>
                <form onSubmit={this.handleSubmit}>
                   
                    <input name="name" type="text" onChange={this.handleChange} value={this.state.name} /><br />
                    <input type="submit" value="Add New Avatar" />
                </form>
                
            
            </div>
        )
    }
}

export default CategoryInfo

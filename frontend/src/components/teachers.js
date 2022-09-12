import React, { Component} from 'react';

class Teachers extends Component {

    state = {
        teachers: []
    }

    loadTeachers = () => {
        // console.log(this.props.token)
        fetch('http://127.0.0.1:8000/account/teacher/list/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Token '+ this.props.token
            },  
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json() )
        .then(
            data =>{
                this.setState({teachers: data})
            }
        ).catch( error => console.error(error))
    }

    render(){
        return (
            <div>
                <h1>Teachers</h1>
                { this.state.teachers.map( teacher => {
                    return <h3 key={teacher.id}>{teacher.teacher_name}</h3>
                })}
                <button onClick={this.loadTeachers}>Load Teachers</button>
            </div>
        );
    }
    
}

export default Teachers;

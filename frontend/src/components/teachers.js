import React, { Component} from 'react';
import {Link} from 'react-router-dom';


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
                console.log(this.props.auth)
            }
        ).catch( error => console.error(error))
    }

    render(){

        
            return (
            <div>
                <table align='center' border='1px solid'>
                    <thead>
                        <td border='1px solid' colSpan='3'><h1>Teachers</h1></td>
                    </thead>
                    <tbody>
                        { this.state.teachers.map( teacher => {
                    return <td> <h3 key={teacher.id}>{teacher.teacher_name}</h3></td>
                    })}
                        
                    </tbody>
                </table>
                
                
                <button onClick={this.loadTeachers}>Load Teachers</button>
            </div>
        );
        
        
    }
    
}

export default Teachers;

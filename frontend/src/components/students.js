import React, { Component} from 'react';

class Students extends Component {

    constructor(props) {
        super(props);
        this.state =({
          students: []
        })
      }


    loadStudents = () => {
        // console.log(this.props.token)
        fetch('http://127.0.0.1:8000/account/students/list/',{
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
                this.setState({students: data});
                console.log('Successfully fetch')
            }

        ).catch( error => console.error(error))
    }

    render(){

        // console.log(this.state.students)
        
        // if(this.state.students && this.state.students.length>0)
        return (
            <div>
                <h1>Students</h1>
                <div>
                    {
                        Array.from(this.state.students).map(a=>{
                            console.log(a)
                            return (
                                <div>
                                    {
                                        a.Subject.map((b,i)=>{
                                            return(
                                                <div >
                                                    <h3 key={i}>{b.subject_name}</h3>
                                                </div>
                                            );
                                        })
                                    }
                                    
                                </div>
                            );
                        }    
                        )
                    }
                </div>
                <button onClick={this.loadStudents}>Load Students</button>
            </div>
        );

        // return (
        //     <div>
        //         <h1>Students</h1>
        //         { Array.from(this.state.students).map( student => {
        //             console.log(student)
        //             return (<h3>{student.subject_name}</h3>)
        //         })}
        //         <button onClick={this.loadStudents}>Load Students</button>
        //     </div>
        // );
    }
    
}

export default Students;

import React, { Component} from 'react';

class Principal extends Component {

    constructor(props) {
        super(props);
        this.state =({
          principal: []
        })
      }


    loadPrincipal = () => {
        // console.log(this.props.token)
        fetch('http://127.0.0.1:8000/account/principal/list/',{
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
                this.setState({principal: data});
                console.log('date:', data[0])
                console.log('Successfully fetch')
            }

        ).catch( error => console.error(error))
    }

    render(){

        // console.log(this.state.students.Subject)
        if( this.state.principal.length > 0 ) {
            this.state.principal.map(a=> {
                console.log('Subject:', a);
            });
        }        
        
        // if(this.state.students && this.state.students.length>0)
        return (
            <div>
                <h1>Principal View</h1>
                <div>
                    {
                        this.state.principal.map(a=>{
                            console.log(a)
                            return (
                                <div>
                                    {
                                        a.teacher_info?.length ?
                                        a.teacher_info.map((teacher,i)=> {
                                            return(
                                                <div>
                                                    <h3 key={i}>{teacher.teacher_name}</h3>
                                                </div>
                                            );
                                        })
                                        :null
                                    }
                                    <h3>{a.class_name}</h3>
                                    <h3>Count of Students: {a.count_of_students}</h3>
                                    {   
                                        a.student_in_classes?.length ? 
                                        a.student_in_classes.map((b,i)=>{
                                        
                                        return (
                                            <div>
                                                <ol key={i}>{b.student_name}</ol>
                                                {
                                                    b.subject_taken?.length ?
                                                    b.subject_taken.map((c,i)=> {
                                                        return (
                                                            <li key={i}>{c.subject_name}</li>
                                                        );
                                                    })
                                                    :null
                                                }
                                            </div>
                                           
                                        );                  
                                        })
                                        :null
                                    }
                                </div>
                            );
                        }    
                        )
                    }
                </div>
                <button onClick={this.loadPrincipal}>Load Principal View</button>
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

export default Principal;
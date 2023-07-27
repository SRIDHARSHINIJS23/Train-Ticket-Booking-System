import React from 'react';
function Info(props) {
    return ( 
        <>
        <div className='i11'>
            <fieldset>
                <legend>PASSANGER{props.n+1}</legend>
                    <input type="text" placeholder='Name'style={{border:'none',width:'18%'}}>
                    </input><br></br><br></br>
                    <input type="number" placeholder='Age'style={{border:'none',width:'18%'}}>
                    </input><br></br><br></br>
                    <input type="number" placeholder='Aadhar Number'style={{border:'none',width:'18%'}}>
                    </input><br></br><br></br>
                    <select style={{border:'none',width:'18%'}}>
                        <option value='Class'>Class</option>
                        <option value="AC 1">AC 1</option>
                        <option value="AC 2">AC 2</option>
                        <option value="AC 3">AC 3</option>
                        <option value="Sleeper">SLEEPER</option>
                        <option value="First Class">FIRST CLASS</option>
                        <option value="Second Class">SECOND CLASS</option>
                    </select>
                    <br></br><br></br>
                    <select style={{border:'none',width:'18%'}}>
                        <option value='Gender'>Gender</option>
                        <option value='Male'>MALE</option>
                        <option value='Female'>FEMALE</option>
                    </select>
                    <br></br><br></br> 
            </fieldset>
        </div>
        </>
     );
}

export default Info;
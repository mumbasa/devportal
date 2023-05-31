import axios from "axios"
import React, { useReducer, useState } from "react"
import { Dna } from "react-loader-spinner"
import Swal from "sweetalert2"

let postInit ={
    "name": null,
    "password": "",
    "role": "",
    "username": null
  }
const UserForm =() =>{
    const ref = React.useRef();
    const reducer = (state, action) => {
        switch (action.type) {
            case 'fill': return ({ ...state, [action.field]: action.payload })
            case 'client': return { ...state, client: { id: action.payload } }
            default: return state
        }

    }
    const [state, dispatch] = useReducer(reducer, postInit)
const[loading,setLoading]=useState()
    const HandleChange = (e) => {
        dispatch({ type: 'fill', field: e.target.name, payload: e.target.value });

    }

    
    const HandleSend = async (e) => {
     setLoading(true)
                await axios.post('http://localhost:1010/v1/api/save/user', state,).then(e => {
                   setLoading(false);
                   Swal.fire(
                    'Success!',
                    'User added to the system.',
                    'success'
                  )
    ref.current.reset();
                            
                }).catch(err => {
                    alert(err);
        
                });
        
            }
        
        

    return (
        <>{loading&&
            <div className="mx-auto align-center col-sm-4 text-center">
    
            <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
    </div>
    }
    
<div className="card shadow mb-4">
<div className="card-body">
        <form className="needs-validation" novalidate="" ref={ref}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" name="name"  onChange={HandleChange} aria-describedby="emailHelp" required=""/>
            <div className="invalid-feedback"> Please use a valid email </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationCustomUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <input type="text" className="form-control" id="validationCustomUsername" name="username" aria-describedby="inputGroupPrepend" required=""  onChange={HandleChange} />
              <div className="invalid-feedback"> Please choose a username. </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationCustom01">Password</label>
            <input type="password" className="form-control" id="validationCustom01"  name='password' onChange={HandleChange} required=""/>
            <div className="valid-feedback"> Looks good! </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationCustom02">Confirm Password</label>
            <input type="password" className="form-control" id="validationCustom02"  required=""/>
            <div className="valid-feedback"> Looks good! </div>
          </div>
        </div>
      
        
        <div className="form-group mb-12">
          <label for="example-multiselect">Select the Role</label>
          <select id="example-multiselect" multiple="" className="form-control" required="" name="role" onChange={HandleChange}>
          <option></option>

<option>Administrator</option>
            <option>Clerk</option>
         
          </select>
        </div>
       
        <button className="btn btn-primary" type="button" onClick={HandleSend}>Add User</button>
      </form>
    </div>
    </div></>
    )
}

export default UserForm
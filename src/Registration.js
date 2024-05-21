import axios from "axios";
import React, { Fragment, useState} from "react";



function Registration() {
    const[FirstName,setFirstName]= useState('');
    const[MiddleName,setMiddleName]= useState('');
    const[LastName,setLastName]= useState('');
    const[BirthDate,setBirthDate]= useState('');
    const[MobilNumber,setMobilNumber]= useState('');
    const[Email,setEmail]= useState('');

    const HandleFirstNameChange=(value)=>{
        setFirstName(value)
    };
    const HandleMiddleNameChange=(value)=>{
        setMiddleName(value)
    }
    const HandleLastNameChange=(value)=>{
        setLastName(value)
    }
    const HandleBirthDateChange=(value)=>{
        setBirthDate(value)
    }
    const HandleMobilNumberChange=(value)=>{
        setMobilNumber(value)
    }
    const HandleEmailChange=(value)=>{
        setEmail(value)
    }
    const HandleSave=()=>{
        const data = {
            fristName : FirstName,
            middelName:MiddleName,
            lastName:LastName,
            brithDate:BirthDate,
            mobileNumber:MobilNumber,
            email:Email
        }
    debugger
    const URL = 'https://localhost:7200/User/Registeration';
    axios.post(URL, data).then((result)=>{
        if(result.data.succeeded == true){
            //alert("Data saved" + result.data.data);
            alert("Registration Successeded");
        }
    }).catch((error)=>{
        alert(error);
    });
}
    return(
        <Fragment>
        <div>Registration</div>
        <label>First Name</label>
        <input type="text" id="textFirstName" placeholder="Enter First Name" onChange={(e)=>HandleFirstNameChange(e.target.value)}/> <br></br>
        <label>Middel Name</label>
        <input type="text" id="textMiddelName" placeholder="Enter Middel Name"onChange={(e)=>HandleMiddleNameChange(e.target.value)}/> <br></br>
        <label>last Name</label>
        <input type="text" id="textLastName" placeholder="Enter Last Name"onChange={(e)=>HandleLastNameChange(e.target.value)}/> <br></br>
        <label>Birth Date</label>
        <input type="Date" id="textBirthDate" placeholder="Enter Birth Date"onChange={(e)=>HandleBirthDateChange(e.target.value)}/> <br></br>
        <label>Mobil Number</label>
        <input type="text" id="textMobilNumber" placeholder="Enter Mobil Number"onChange={(e)=>HandleMobilNumberChange(e.target.value)}/> <br></br>
        <label>Email</label>
        <input type="text" id="Email" placeholder="Enter Email"onChange={(e)=>HandleEmailChange(e.target.value)}/> <br></br>
         {/* Address Filed <br></br>

        <label>Governmente</label>
        <input type="" id="Governmente" placeholder="Enter Governmente"/> <br></br>
        <label>City</label>
        <input type="text" id="City" placeholder="Enter City"/> <br></br>
        <label>Street</label>
        <input type="text" id="Street" placeholder="Enter Street"/> <br></br>
        <label>Building number</label>
        <input type="text" id="BuildingNumber" placeholder="Enter Building number"/> <br></br>
        <label>Flat number</label>
        <input type="number" id="FlatNumber" placeholder="Enter Flat number"/> <br></br> */}

        <button onClick={()=>HandleSave()}>Save</button>
        </Fragment>
    )
}
export default Registration
import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducers/FormReducers";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  const handleChange = (e)=>{
    dispatch({
        type:"UPDATE_FIELD",
        field: e.target.name,
        value: e.target.value,
    });
  }

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Succesfully</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <>
      <h3>Step {step}/ 3</h3>
      
      {step === 1 && (
        <>
        <input name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange}/>
        <br />
        <input name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        <br />
        <button disabled={!formData.name || !formData.email} onClick={()=>dispatch({type:"NEXT_STEP"})}>
            Next
        </button>
        </>
      )}

      {step === 2 && (
        <> 
        <input name="userName" placeholder="Enter Username" value={formData.userName} onChange={handleChange} />
        <br />
        <input name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
        <br />
        <button onClick={()=>dispatch({type : "PREVIOUS_STEP"})}> Back </button>
        <button disabled={!formData.userName || !formData.password } onClick={()=>{dispatch({type:"NEXT_STEP"})}}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
        <h4>Review Details</h4>
        <p>Name : {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Username : {formData.userName}</p>

        <button onClick={()=>dispatch({type:"PREVIOUS_STEP"})}>Back</button>
        <button onClick={()=>dispatch({type:"SUBMIT_FORM"})}>Submit</button>
        </>
      )}
    </>
  );
};

export default MultiStepForm;

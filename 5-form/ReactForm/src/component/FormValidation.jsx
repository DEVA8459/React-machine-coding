import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interested: "",
    birthDate: "",
  });

  const[errors ,setErrors]=useState({});

  const ValidateForm = () =>{
    let newErrors ={}

    if(!formData.firstName){
        newErrors.firstName="First Name is Required"
    }
    if(!formData.lastName){
        newErrors.lastName="Last Name is Required"
    }
    

    setErrors(newErrors)
    return Object.keys(newErrors).length===0

  }
  const handleSubmit =(e)=>{
    e.preventDefault()

    const isValid =ValidateForm();
    if(isValid){
        console.log("from Submitted" ,formData);
    }else{
        console.log("from validation failed")
    }
   

  }

  const handleChange =(e)=>{
    const {name ,value}= e.target

    setFormData({
        ...formData,[name]:value
    })
  }

  const handelCheckBox =(e)=>{
    const {name ,checked}=e.target
    let updateIntrests =[...formData.interested ]
    if(checked){
        updateIntrests.push(name)
    }else{
        updateIntrests =updateIntrests.filter((interested)=>interested!==name)
    }

    setFormData({
        ...formData ,
        interested : updateIntrests
    }
)
  }

  return (
    <div className="container">
      <h1>FormValidation</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>First Name :</label>
          <input
          //note here name shoul equals to name in value ex  firstName
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div>
          <label>Last Name :</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            placeholder="Enter Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>confirm Password:</label>
          <input
            type="password"
            placeholder="Enter password to confirm "
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            placeholder="Enter your Age "
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="male" >Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div>
            <label>Intrests:</label>
            <label>
                <input type="checkbox" name="coding" checked={formData.interested.includes("coding")} onChange={handelCheckBox}/>coding
            </label>
            <label>
                <input type="checkbox" name="sports" checked={formData.interested.includes("sports")} onChange={handelCheckBox}/>sports
            </label>
            <label>
                <input type="checkbox" name="reading" checked={formData.interested.includes("reading")} onChange={handelCheckBox} />Reading
            </label>
        </div>
        <div>
            <label>Date of Birth :</label>
            <input type="date" name="birthDate"
            value={formData.birthDate}
            placeholder="please enter your birth date"
            onChange={handleChange}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;

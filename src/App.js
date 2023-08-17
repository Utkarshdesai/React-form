import { useState } from "react";
import "./App.css";

function App() {

  const[ formdata, setformdata ] = useState ( {
    firstname:"",lastname:"" ,email : "" , country : "" , address : "" , city : '', state : "",
     pincode: "" , comments : false , candidates:false , offers:false , notifications: ''
  })

  
     function changehandler(event) {
        
        const {name,value,checked,type} = event.target
        console.log(event.target)

            setformdata ( formdata => {

          return {
            ...formdata,
            [name] :type ==="checkbox" ? checked :value
          }
        
        } )
           
      }

      function submithandler (event) 
      {
      event.preventDefault()
      console.log(formdata)
      }

      console.log(formdata)
      return (
        <div >

     <form onSubmit={submithandler}>
    <div className="flex flex-col mt-3 ml-10 " >  
    
     <label htmlFor="firstname" className="ml-0 px-"> firstname</label>
   
      <input
       type="text"
       name="firstname"
       value={formdata.firstname}
       id="firstname"
       placeholder="abcd"
       onChange={changehandler}
       className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"
      />

    <label htmlFor="lastname"> lastname </label>
      <input
       type="text"
       name="lastname"
       value={formdata.lastname}
       id="lastname"
       placeholder="xyz"
       onChange={changehandler}
       className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"
      />

    <label htmlFor="email">email </label>

    <input
     type="email"
     name="email"
     value={formdata.email}
     id="email"
     placeholder="abcd@gmail.com"
     onChange={changehandler}
     className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"
     
   />

  
    <label htmlFor="country"> country</label>

     <select 
      id="country"
      value={formdata.country}
      name="country"
      onChange={changehandler} 
    
      className="border border-solid border-blue-400  bg-gray-100 p-2 mt-2 w-[20%] rounded-md"
     >
      
     <option value="india"  className="bg-#14b8a6"   >India</option>
     <option  value="USA"  className="bg-#14b8a6"  >USA</option>
     <option value ="UK"  className="bg-#14b8a6"  >UK</option>
      
     </select>
    

    <label htmlFor="add" className="font -">street address </label>

    <input
    type="address"
    name="address" 
    id="add"
    value={formdata.address}
    placeholder="abcd"
    onChange={changehandler}
    className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"
    />


    <label htmlFor="city" className="font -">City </label>

    <input
    type="text"
    name="city" 
    id="city"
    placeholder="abcd"
    value={formdata.city}
    onChange={changehandler}
    className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"
    
    />


    <label htmlFor="state" className="font -">State </label>

    <input
    type="text"
    name="state" 
    id="state"
    placeholder="abcd"
    value={formdata.state}
    onChange={changehandler}
    className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"
    
    />


    <label htmlFor="pincode" className="font -"> Pin code </label>

    <input
    type="number"
    name="pincode" 
    id="pincode"
    placeholder="1234"
    onChange={changehandler} 
    className="border border-solid border-blue-400 p-2 mt-2 w-[20%] rounded-md"

    
    />

    <fieldset className="w-full px-4 py-2  rounded-md mt-4" >
      <div >

       <legend className="text-lg font-semibold mb-2">by email  </legend> 
      
          
      <input
      type="checkbox"
      name="comments" 
      id="comments"
      checked = {formdata.comments}
      onChange={changehandler}
      className="border border-gray-400 rounded-md p-2 mt-3 " 
      />

      <label htmlFor="comments" > comments </label> 
      <p > get notified when someone post's a comment on a posting a job   </p>


      <input
      type="checkbox"
      name="candidates" 
      id="candidates"
      checked = {formdata.candidates}
      onChange={changehandler}
      className="border border-gray-400 rounded-md p-2 mt-3 "
      
      />

      <label htmlFor="candidates" className="mt-1"> candidates </label> 
      <p > get notified when cadiditate applies for job  </p>


      <input
      type="checkbox"
      name="offers" 
      id="offers"
      checked = {formdata.offers}
      onChange={changehandler}
      className="border border-gray-400 rounded-md p-2 mt-3 "
    
      />

      <label htmlFor="offers" className="mt-1"> offers </label> 
      <p> get notified when cadiditate accepts or rejects an offer </p>


      </div>
    
    </fieldset>  

    <fieldset>
      <div className="w-full px-4 py-2  rounded-md mt-4">

      <legend className="text-lg font-semibold mb-2">push notifications  </legend> 
      <p className="text-gray-600 text-sm mb-2"> There are delivered via SMS to your phone   </p> 

      <input
      type="radio"
      name="notifications" 
      id="everything"
      value="everything"
      onChange={changehandler}
      className="border border-gray-400 rounded-md p-2 mt-3 "
    
      />

      <label htmlFor="everything" className="mr-2"> everything </label>

      <input
      type="radio"
      name="notifications" 
      id="same as email"
      value="same as email"
      onChange={changehandler}
      className="border border-gray-400 rounded-md p-2 mt-3 "
      
      />

      <label htmlFor="same as email" className="mr-2"> same as email</label>


      <input
      type="radio"
      name="notifications" 
      id="manage"
      value="manage notifications"
      onChange={changehandler}
      className="border border-gray-400 rounded-md p-2 mt-3 "
    
      />

      <label htmlFor="manage"> manage notification </label>


     </div>
   

    </fieldset>

    <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 w-[12%] " > Save</button>

    </div>
     </form>

   </div>
 )
  
}

export default App;

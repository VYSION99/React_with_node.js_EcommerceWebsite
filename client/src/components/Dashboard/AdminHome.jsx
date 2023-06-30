import {useState} from 'react'
import {useSelector} from "react-redux"
import {Form ,Field} from  "react-final-form"
import Select from 'react-select'
import Image,{files} from "../Administrator/Dropzone"

function AdminHome() {
  const {Admin, isLoading,isSuccess } = useSelector((state) =>(state.Admin))

const [selected,setSelected] = useState(null)
  const Selecthandler = (selected)=>{
    setSelected(selected.label)
    }
  const onSubmit = (value)=>{
console.log(value)
  }
  const category = { fh:'Fashion' ,fo:'Food',tech:'Technology'}
  const categoryArr = Object.entries(category).map(([key,value])=>{
    return {
      value: key,
      label: value,
     }
   })
  return (
    <div>

<Form    
        onSubmit={onSubmit}
        render={({ handleSubmit}) => (
          <form className=" g-3  mt-2 mx-6 shadow p-3  " onSubmit={handleSubmit}>
            <h3 className="ErrorMsg hidden text-red-400 -mt-3 mb-2 shadow-red-200 rounded-md shadow-inner p-2"> </h3>
          
           
            <Field
              name="State"
              render={({  meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='choose your Category'
                        options={categoryArr}
                        onChange={Selecthandler}
                        className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                      />
                     </div>
                  )}
               
              
            />
            {selected ? <Field
              name="City"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-r-4 my-3  border-lime-500"}>
                  <input
                    {...input}
                    placeholder="Enter your City"
                    className={  meta.touched && meta.error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                        ? " is-invalid  form-control"
                        : "form-control my-2 shadow-md shadow-gray-500"
                    }
                  />
                 
                </div>
              )}
            /> : ""}
                    
                  
        
            <Field
              name="ProductName"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-yellow-400"}>
                  <input
                    {...input}
                  required
                    type="text"
                    placeholder="Name of Product"
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control  mt-2 shadow-md shadow-gray-400"
                    }
                  />
                  
                </div>
              )}
            />
            
                      <Image className="bg-dark"  />
            {console.log(files)}
            

            <small className="form-check lg:font-semibold md:font-medium">
              <label htmlFor="invalidCheck" className=""><input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />Agree to terms and conditions</label>

              
            </small>

            <div className="m-2">
            
            <button
            type="submit"
            className=" bg-green-200 form-control"
            disabled={isLoading}
          >
            {isLoading ? (
              <div>
                {" "}
                <span
                  className="spinner-border spinner-border-sm ml-2"
               role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </div>
            ) : (
              " submit"
            )}
          </button>
            
            </div>
            
          </form>
        )}
      ></Form>
    </div>
  )
}

export default AdminHome
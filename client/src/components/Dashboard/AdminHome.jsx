import {useState} from 'react'
import {useSelector} from "react-redux"
import {Form ,Field} from  "react-final-form"
import Select from 'react-select'
import {Uploader,Images} from "../Administrator/Dropzone";
import {productData} from "../Administrator/product_Array"

function AdminHome() {
  const {Admin, isLoading,isSuccess } = useSelector((state) =>(state.Admin))

const [selected,setSelected] = useState(null)
  const Selecthandler = (selected)=>{
    setSelected(selected.label)
    }
    //console.log(files)
  const onSubmit = (value)=>{
const {Categorys,Brands,Price,ProductName,Description} = value;
const Brand = Brands.label;  const Category = Categorys.label; const Image =Images.name
const ProductData ={ Brand,Category,Price,ProductName,Description,Image}
console.log(ProductData)
  }
  const category = { fh:'Fashion' ,fo:'Food',tech:'Technology'}
  const categoryArr = Object.entries(category).map(([key,value])=>{
    return {
      value: key,
      label: value,
     }
   })
   const { FashionCategorys,FashionData,FoodCategorys,
    FoodData,TechnologyCategorys,accessoriesData} = productData
  return (
    <div>

<Form    
        onSubmit={onSubmit}
        render={({ handleSubmit}) => (
          <form className=" g-3  mt-2 mx-6 shadow p-3  " onSubmit={handleSubmit}>
            <h3 className="ErrorMsg hidden text-red-400 -mt-3 mb-2 shadow-red-200 rounded-md shadow-inner p-2"> </h3>
          <div className="">
            <label htmlFor="image">ProductImage* </label>
          </div>
           <Uploader id ="image" className="bg-dark"  />
            <Field
              name="option"
              render={({  meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='What to Publish'
                        options={categoryArr}
                        onChange={Selecthandler}
                        className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                      />
                     </div>
                  )}
             />
           
                    
                {selected == "Food"?
                <>
                <Field
              name="Brands"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-r-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='Choose product Brand'
                        options={FoodData}
                        {...input}
                        required
                        className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                      />
                 
                </div>
              )}
            />
                <Field
              name="Categorys"
              render={({input,  meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='Choose Product Category'
                        options={FoodCategorys}
                       {...input}
                       required
                        className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                      />
                     </div>
                  )}
             />
                </>
                :selected == "Fashion" ?
                <>
                <Field
              name="Brands"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-r-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='choose your Category'
                        options={FashionData}
                        {...input}
                        className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                      />
                 
                </div>
              )}
            />
                
                <Field
                name="Categorys"
                render={({input,  meta }) => (
                  <div className={meta.active ? "active" : "border-l-4 my-3  border-lime-500"}>
                    <Select 
                          placeholder='choose your Category'
                          options={FashionCategorys}
                          {...input}
                          className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                        />
                       </div>
                    )}
               /></>
                :selected == "Technology" ?
                <>
                
                <Field
              name="Brands"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-r-4 my-3  border-lime-500"}>
                  <Select 
                        placeholder='choose your Category'
                        options={accessoriesData}
                        {...input}
                        className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                      />
                 
                </div>
              )}
            />

                <Field
                name="Categorys"
                render={({input,  meta }) => (
                  <div className={meta.active ? "active" : "border-l-4 my-3  border-lime-500"}>
                    <Select 
                          placeholder='choose your Category'
                          options={TechnologyCategorys}
                          {...input}
                          className='bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500'
                        />
                       </div>
                    )}
               /></>
                :''}  
        
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
            <Field
              name="Price"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-yellow-400"}>
                  <input
                    {...input}
                  required
                    type="text"
                    placeholder="Name your Price"
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control  mt-2 shadow-md shadow-gray-400"
                    }
                  />
                  
                </div>
              )}
            />
            <Field
              name="Description"
              render={({ input, meta }) => (
                <div className={meta.active ? "active" : "border-l-4 my-3  border-yellow-400"}>
                  <textarea
                    {...input}
                  required
                    type="text"
                    placeholder=" Describe the product"
                    className={
                      meta.touched && meta.error
                        ? " is-invalid  form-control"
                        : "form-control  mt-2 shadow-md shadow-gray-400"
                    }
                  />
                  
                </div>
              )}
            />
            
                      
            
            

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
              "Publish"
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
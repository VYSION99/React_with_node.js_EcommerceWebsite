import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import Select from "react-select";
import { Uploader,Images } from "../Administrator/Dropzone";
import { productData } from "../Administrator/product_Array";
import { createProduct, reset } from "../../redux/authRudux/productSlice";
import axios from "axios";



function AdminHome() {
const API = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});


  const { Isloading, Ispublished, Iserror,msg } = useSelector((state) => state.Product);
  const dispact = useDispatch();
  const [selected, setSelected] = useState(null);
  const [choose, setChoose] = useState(null);
  const [Brand, setBrand] = useState(null);
  const Selecthandler = (selected) => {
    setSelected(selected.label);
  };
  //console.log(Images)
  const Brandhandler = (e) => {
    setBrand(e.label);
  };

  //////////////...................... submit form data .................................../////////////////////////////
  const onSubmit =(value) => {
  
    const { Price, ProductName, Des } = value;
    
    const Category = choose; const Opt = selected
    const P_ProcessingData = { Opt, Category,Brand, Price, ProductName, Des};
    //...... send data to backend.......................//
    setTimeout(async  ()=>{
      
      await API.post("Admin/image",Images,).then((respones)=> (respones.data)).catch((error)=>(console.error(error)))
    },1000)   
    //console.log(ProductData);
    dispact(createProduct(P_ProcessingData));

    setTimeout(()=>{
    // dispact(reset())     
    },5000)
  };

  // checking the field array  
  const category = { fh: "Fashion", fo: "Food", tech: "Technology" };
  const categoryArr = Object.entries(category).map(([key, value]) => {
    return {
      value: key,
      label: value,
    };
  });

  const Changer = (e) => {
    setChoose(e.label);
  };
  const { FashionCategorys, FoodCategorys, TechnologyCategorys, results } =
    productData;
  

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            className=" g-3  mt-2 mx-6 shadow p-3  "
            onSubmit={handleSubmit}
          >
            <h3 className="ErrorMsg  text-red-400 -mt-3 mb-2 shadow-red-200 rounded-md shadow-inner p-2">
              {//Ispublished?msg:""
              }
              {//Iserror?msg:""
              }
            </h3>
            <div >
              {Iserror? <h3 className="text-red-500">{msg}</h3>: ""}
              {Ispublished? <h3 className="text-green-600-500">Product Successfully Published</h3>: ""}
              
            </div>

            <Field
              name="option"
              render={({ meta }) => (
                <div
                  className={
                    meta.active
                      ? "active"
                      : "border-r-4 my-3 rounded-r-md border-lime-500"
                  }
                >
                  <Select
                    placeholder="What to Publish"
                    options={categoryArr}
                    onChange={Selecthandler}
                    className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                  />
                </div>
              )}
            />

            {selected == "Food" ? (
              <>
                <Field
                  name="Category"
                  render={({ meta }) => (
                    <div
                      className={
                        meta.active
                          ? "active"
                          : "border-r-4 my-3 rounded-r-md border-lime-500"
                      }
                    >
                      <Select
                        placeholder="Choose product Brand"
                        options={FoodCategorys}
                        required
                        onChange={Changer}
                        className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                      />
                    </div>
                  )}
                />
                <Field
                  name="Brands"
                  render={({ input, meta }) => (
                    <div
                      className={
                        meta.active
                          ? "active"
                          : "border-l-4 my-3 rounded-l-md border-lime-500"
                      }
                    >
                      {choose == "Agriculture Tools" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[1]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : choose == "Food packages" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[0]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                />
              </>
            ) : // ............................... Fashion form product ...................................//
            selected == "Fashion" ? (
              <>
                <Field
                  name="Categorys"
                  render={({ meta }) => (
                    <div
                      className={
                        meta.active
                          ? "active"
                          : "border-r-4 my-3 rounded-r-md border-lime-500"
                      }
                    >
                      <Select
                        placeholder="choose your Category"
                        options={FashionCategorys}
                        onChange={Changer}
                        className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                      />
                    </div>
                  )}
                />

                <Field
                  name="Brands"
                  render={({ meta }) => (
                    <div
                      className={
                        meta.active
                          ? "active"
                          : "border-l-4 my-3 rounded-l-md border-lime-500"
                      }
                    >
                      {choose == "Sport & Entertainment" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[5]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : choose == "Beauty" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[6]}
                        onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : choose == "Home & Gardens" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[8]}
                        onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : choose == "Apparel & Accessories" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[7]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                />
              </>
            ) : //........................... technology form details.................................//
            selected == "Technology" ? (
              <>
                <Field
                  name="Categorys"
                  render={({ meta }) => (
                    <div
                      className={
                        meta.active
                          ? "active"
                          : "border-r-4 my-3 rounded-r-md border-lime-500"
                      }
                    >
                      <Select
                        placeholder="choose your Category"
                        options={TechnologyCategorys}
                        onChange={Changer}
                        className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                      />
                    </div>
                  )}
                />

                <Field
                  name="Brands"
                  render={({ meta }) => (
                    <div
                      className={
                        meta.active
                          ? "active"
                          : "border-l-4 my-3 rounded-l-md border-lime-500"
                      }
                    >
                      {choose == "Industrial Machinery" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[4]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : choose == "Consumer Electronics" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[3]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : choose == "Travels & Accessories" ? (
                        <Select
                          placeholder="choose your Category"
                          options={results[2]}
                          onChange={Brandhandler}
                          className="bg-opacity-90  text-center rounded-md shadow-md shadow-gray-500"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                />
              </>
            ) : (
              ""
            )}

            <Field
              name="ProductName"
              render={({ input, meta }) => (
                <div
                  className={
                    meta.active
                      ? "active"
                      : "border-l-4 my-3 rounded-l-md border-yellow-400"
                  }
                >
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
                <div
                  className={
                    meta.active
                      ? "active"
                      : "border-l-4 my-3 rounded-l-md border-yellow-400"
                  }
                >
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
              name="Des"
              render={({ input, meta }) => (
                <div
                  className={
                    meta.active
                      ? "active"
                      : "border-l-4 my-3 rounded-l-md  border-yellow-400"
                  }
                >
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

            {selected ? (
              <Uploader id="image" className="bg-dark shadow-inner" />
            ) : (
              ""
            )}

            <small className="form-check lg:font-semibold md:font-medium">
              <label htmlFor="invalidCheck" className="">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                Agree to terms and conditions
              </label>
            </small>

            <div className="m-2">
              <button
                type="submit"
                className=" bg-green-200 form-control"
                disabled={Isloading}
              >
                {Isloading ? (
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
  );
}

export default AdminHome;

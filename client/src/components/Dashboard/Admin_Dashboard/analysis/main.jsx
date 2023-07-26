import React from 'react'
import LineChart from "../chart/chart"
import Feedback from "../notification/feedback"
function main() {
  return (
    <div>
        <div className="features flex justify-between  ">
             <div className="featuresRevenue  text-slate-300 rounded-md    shadow-sm  my-2 ">
               <span className="font-bold m-1 capitalize  ">today's income</span>
                    <div className=" flex  nob ">
                            <div className="shadow-sm mx-2 font-thin text-slate-100 ">Rate : 12%</div>
                            <div className="shadow-sm mx-2 font-thin text-slate-100 ">max-100 </div>            
                  </div>
                            <div className="progress h-1 m-1">
                           <div className="progress-bar" role="progressbar" style={{width: "12%", background:"red"}}
                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                           </div> 

          
       </div>
        <div className="featuresSales text-slate-300 rounded-md shadow-md  my-2">
                <span className="font-bold capitalize m-1  ">total revenue</span>
               <div className=" flex nob  ">
                <div className="shadow-sm font-thin mx-2 text-slate-100 ">Rate: 75%</div>
                <div className="shadow-sm font-thin mx-2 text-slate-100 ">max : 100% </div>
               </div>
                <div className="progress h-1 m-1">
  <div className="progress-bar" role="progressbar" style={{width: "65%"}}
   aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        <div className="featuresExpenditure text-slate-300 rounded-md  my-2 shadow-md">
        <span className="font-bold m-1 capitalize  ">total sales</span>
               <div className=" flex nob  ">
                <div className="shadow-sm font-thin mx-2 text-slate-100 ">Rate : 95%</div>
                <div className="shadow-sm font-thin mx-2 text-slate-100 ">max : 100% </div>
               </div>
                <div className="progress h-1 m-1">
  <div className="progress-bar" role="progressbar" style={{width: "95%" ,backfaceVisibility:'revert-layer', background:"gold"}}
   aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
       
        </div>
        <div className="flex my-2">
          {/*Feedback imprementation */}
          <div className="flex-1 shadow-sm">
           <Feedback/>

          </div>
        {/*graph imprementaion */}
          <div className="flex-4"><LineChart/></div>
          </div>
        {/* Transaction details */}
        <div className="flex my-2">
          <div className="flex-4 shadow-lg">
             <h1 className="font-extrabold text-slate-400">Transaction Details</h1>
             <div className="table-responsive">
              <table className="table table-striped-columns
              table-hover	
              table-borderless
              table-primary
              align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Consumer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr className="table-primary" >
                      <td scope="row">Vysion Querrine</td>
                      <td>23/03/2023</td>
                      <td>$48.00</td>
                      <td>Aproved</td>
                    </tr>
                    <tr className="table-primary">
                      <td scope="row">Comfort Avogah</td>
                      <td>23/08/2009</td>
                      <td>$21.00</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    
                  </tfoot>
              </table>
             </div>
             
          </div>
          <div className="flex-4 shadow-2xl">
             <h1 className="font-extrabold text-slate-400 mx-4">Users</h1>
             <ul>
              <li className="rounded shadow-md p-2">
                 <div className="flex bg-slate-200 rounded"> <img src="/acm.jpg" alt="acm"className="rounded-full w-7 h-7 mr-2" /> 
                  <span className="font-bold">vicent ~@OSM</span> </div> 
              <div className=" rounded-md px-4 italic font-extralight Fnt ">wow, good product and best delivers</div>
              </li>
              <li className="rounded shadow-md p-2">
                 <div className="flex bg-slate-200 rounded"> <img src="/acm.jpg" alt="acm"className="rounded-full w-7 h-7 mr-2" /> 
                  <span className="font-bold">vicent ~@OSM</span> </div> 
              <div className=" rounded-md px-4 italic font-extralight Fnt ">wow, good product and best delivers</div>
              </li>
              <li className="rounded shadow-md p-2">
                 <div className="flex bg-slate-200 rounded"> <img src="/acm.jpg" alt="acm"className="rounded-full w-7 h-7 mr-2" /> 
                  <span className="font-bold">vicent ~@OSM</span> </div> 
              <div className=" rounded-md px-4 italic font-extralight Fnt ">wow, good product and best delivers</div>
              </li>
             </ul>
              
          </div>
        </div>
    </div>
  )
}

export default main
import { NavLink } from "react-router-dom"
import Applicants from "../component/tables/applicants"
import Recent from "../component/tables/recent"
import Layout from "../fragment/layout"
import { useEffect, useState } from "react"
import axios from "axios"

const Dashboard =()=>{
const [items,setItems] = useState([])
const userdata = JSON.parse(sessionStorage.getItem('token'));

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userdata.token
}
  useEffect(() => {

    const FetchSettings = async () => {

        await axios.get('http://149.102.145.130:1010/v1/api/all/dashdata',{headers}).then(e => {
            setItems(e.data);
            console.log(e.data);
        }).catch(err => {
            alert(err);

        });



    }


 
 FetchSettings()

}, []);



    return (
<Layout>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row align-items-center mb-2">
                <div className="col">
                  <h2 className="h5 page-title">Welcome {userdata.username}!</h2>
                </div>
                <div className="col-auto">
                  <form className="form-inline">
                    <div className="form-group d-none d-lg-inline">
                      <label for="reportrange" className="sr-only">Date Ranges</label>
                      <div id="reportrange" className="px-2 py-2 text-muted">
                        <span className="small"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn btn-sm"><span className="fe fe-refresh-ccw fe-16 text-muted"></span></button>
                      <button type="button" className="btn btn-sm mr-2"><span className="fe fe-filter fe-16 text-muted"></span></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mb-2 align-items-center">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="row mt-1 align-items-center">
                      <div className="col-12 col-lg-4 text-left pl-4">
                        <p className="mb-1 small text-muted">Total Applications</p>
                        <span className="h3">{items[0]}</span>
                      </div>
                      <div className="col-6 col-lg-2 text-center py-4">
                        <p className="mb-1 small text-muted">Today's Submission</p>
                        <span className="h3">{items[4]}</span><br />
                      </div>
                      <div className="col-6 col-lg-2 text-center py-4 mb-2">
                        <p className="mb-1 small text-muted">This Month</p>
                        <span className="h3">{items[1]}</span><br />
                      </div>
                      <div className="col-6 col-lg-2 text-center py-4">
                        <p className="mb-1 small text-muted">Last Month</p>
                        <span className="h3">{items[2]}</span><br />
                      </div>
                      <div className="col-6 col-lg-2 text-center py-4">
                        <p className="mb-1 small text-muted">Missing CV</p>
                        <span className="h3">{items[3]}</span><br />
                        <span className="small text-muted">{items[3]*100/items[0]}%</span>
                      </div>
                    </div>
                    <div className="chartbox mr-4">
                      <div id="areaChart"></div>
                    </div>
                  </div>
                </div> 
              </div>
           
              <div className="row">
          
                
               
                <div className="col-md-12 col-lg-12">
                  <div className="card shadow">
                    <div className="card-header">
                      <strong className="card-title">Recent Data</strong>
                      <NavLink className="float-right small text-muted" to="/applicants">View all</NavLink>
                    </div>
                      <Recent></Recent>
                  </div>
                </div> 
              </div> 
            </div>  
          </div> 
        </div>
        </Layout>
    )
}
export default Dashboard
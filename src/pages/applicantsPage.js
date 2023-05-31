import Applicants from "../component/tables/applicants"
import Layout from "../fragment/layout"

const ApplicationPage =()=>{











    return (
<Layout>
<div class="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="page-title">Applicants</h1>
            </div> 
          </div> 
          <div className="row justify-content-center">
           <Applicants></Applicants>
            </div> 
          
        </div> 


</Layout>

    )
}
export default ApplicationPage
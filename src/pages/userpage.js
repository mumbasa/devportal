import Applicants from "../component/tables/applicants"
import Users from "../component/tables/users"
import Layout from "../fragment/layout"

const UserPage =()=>{











    return (
<Layout>
<div class="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="page-title">System Users</h1>
            </div> 
          </div> 
          <div className="row justify-content-center">
           <Users></Users>
            </div> 
          
        </div> 


</Layout>

    )
}
export default UserPage
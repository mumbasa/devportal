import UserForm from "../component/forms/userform"
import Applicants from "../component/tables/applicants"
import Users from "../component/tables/users"
import Layout from "../fragment/layout"

const NewUser =()=>{











    return (
<Layout>
<div class="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="page-title">Add System User</h1>
            </div> 
          </div> 
          <div className="row">
           <UserForm></UserForm>
            </div> 
          
        </div> 


</Layout>

    )
}
export default NewUser
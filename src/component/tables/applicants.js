import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Dna } from "react-loader-spinner";
import Swal from "sweetalert2";

const Applicants =(props)=>{

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            grow:1,

        },
        {
            name: 'Contact',
            selector: row => row.phone,
            grow:1,
        },
   
        {
            name: 'Email',
            selector: row => row.email,
            grow:1,

        },
        {
            name: 'Date Submitted',
            selector: row => row.dateAdded,
        },

        {
            name: '',
            grow:1,

            selector: row =><div>
     

          
     <div className="btn-group">
            {row.cv==='uploaded file'?            
            <span  className="btn btn-outline-danger disabled mr-1" >No cv uploaded</span>
:
            <a href={'http://149.102.145.130:1010/v1/api/downloadFile/'+row.cv} target="_blank" className="btn btn-success mr-1" >Download Resume</a>
        }</div>
       
       
         

           
        </div>
        
        },
       
    ];
 
    const userdata = JSON.parse(sessionStorage.getItem('token'));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userdata.token
    }

    useEffect(() => {

        const FetchSettings = async () => {

            await axios.get('http://localhost:1010/v1/api/all/application',{headers}).then(e => {
                setItems(e.data);
                console.log(e.data);
                setLoading(false);
            }).catch(err => {
                alert(err);

            });



        }



     FetchSettings()
    
    }, []);


    const deleteClient = async (e) => {

        await axios.post('http://localhost:9090/all/application',e).then(e => {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            console.log(e.data);
            setLoading(false);
        }).catch(err => {
            alert(err);

        });

    }


    const activateClient = async (e) => {

        await axios.put('http://localhost:9090/v1/api/activate/client').then(e => {
           
            console.log(e.data);
            setLoading(false);
            Swal.fire(
                'Restored!',
                'Client services has been restored.',
                'success'
              )
        }).catch(err => {
            alert(err);

        });

    }



    const [loading, setLoading] = useState(true);
    const [manager, setManager] = useState({});
    const [items, setItems] = useState();

    const [success, isSuccess] = useState(false);
    const [error, isError] = useState(false);
    const Clicker = (e) => {

        setManager(e);


    }
function handleClick(e){
if(e.status==1){


    Swal.fire({  
        title: 'Are you sure you want to deactivate client?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         deleteClient(e);
        }
      }); 
    }else{

        Swal.fire({  
            title: 'Are you sure you want to activate Client services?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             activateClient(e);
            }
          }); 

    }
}
    return (

        <div className="col-lg-12 col-md-12">
            
{!items&&
        <div className="mx-auto align-center col-sm-4 text-center">

        <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
</div>
}
{items &&
            <DataTable
    className="table border table-hover bg-white"
        columns={columns}
        data={items}
        pagination
      // progressComponent={<Loader/>}
        //paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        //subHeader
        //subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
    />
}
                            <div class="modal fade" id="example-modal-lg-2" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel2" style={{ display: 'none' }} aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myLargeModalLabel2">Add Post Manager Information</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div class="modal-body">
                                </div>
                            </div>
                        </div>
                    </div>

            </div>


    );
}
export default Applicants;
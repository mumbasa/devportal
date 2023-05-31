const Results =(props)=>{



return (

<div class="col-md-12">
                  <div class="card shadow mb-4">
                    <div class="card-header">
                      <strong class="card-title">Application Details</strong>
                    </div>
                    <div class="card-body">
                      <dl class="row align-items-center mb-0">
                        <dt class="col-sm-2 mb-3 text-muted">Applicant</dt>
                        <dd class="col-sm-4 mb-3">
                          <strong>{props.item.name}</strong>
                        </dd>
                        <dt class="col-sm-2 mb-3 text-muted">Email Addresss</dt>
                        <dd class="col-sm-4 mb-3">
                          <strong>{props.item.email}</strong>
                        </dd>
                      </dl>
                      <dl class="row mb-0">
                        <dt class="col-sm-2 mb-3 text-muted">Contact</dt>
                        <dd class="col-sm-4 mb-3">{props.item.phone}</dd>
                        <dt class="col-sm-2 mb-3 text-muted">Date Added</dt>
                        <dd class="col-sm-4 mb-3">{props.item.dateAdded}</dd>
                        <dt class="col-sm-2 mb-3 text-muted">Uploaded File</dt>
                        <dd class="col-sm-4 mb-3">
                            <a class="btn btn-sm btn-primary" href={'http://149.102.145.130:1010/v1/api/downloadFile/'+props.item.cv} id="dropdownMenuButton"> Download CV
                            </a>
                           
                        </dd>
                        <dt class="col-sm-2 mb-3 text-muted">Status</dt>
                        <dd class="col-sm-4 mb-3">
                          <span class="dot dot-md bg-warning mr-2"></span> Open <div class="dropdown d-inline">
                            <button class="btn btn-sm p-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span class="sr-only">Change status</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="#">Close</a>
                              <a class="dropdown-item" href="#">Assigned</a>
                              <a class="dropdown-item" href="#">Wait</a>
                            </div>
                          </div>
                        </dd>
                        </dl>
                    </div>
                  </div> 
                  
                </div> 

)

}

export default Results
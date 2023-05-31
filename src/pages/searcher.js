import { useState } from "react"
import Layout from "../fragment/layout"
import Results from "../component/tables/results"
import axios from "axios"
import { Dna } from "react-loader-spinner"

const Searcher = () => {

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState('')
  const [item, setItem] = useState()

const changer =()=>{

  setItem()
}

const userdata = JSON.parse(sessionStorage.getItem('token'));

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userdata.token
}

  const HandleSend = async (e) => {
setItem()
    setLoading(true)
    await axios.get('http://localhost:1010/v1/api/application?id=' + search,{headers}).then(e => {
      setLoading(false);
      setItem(e.data)

    }).catch(err => {
      alert(err);
      setItem({})

    });

  }






  return (
    <Layout>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12">
            <h1 className="page-title">Search Applicant</h1>
            <p class="text-muted">Search results filters by Id of application</p>

          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">


            <div className="input-group mt-3">
              <input type="number" className="form-control" placeholder="Applicant's submission Id" aria-label="Applicant's submission Id" aria-describedby="button-addon2" onChange={changer} onBlur={e => setSearch(e.target.value)} />
              <div className="input-group-append">
                <button className="btn btn-success" type="button" id="button-addon2" onClick={HandleSend}>Search</button>


              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto align-center col-sm-4 text-center">
        {loading &&
        <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>}
</div>
        {item &&

          <>

            <div class="row justify-content-center">
              <div className="col-12 mt-5">

                <h4>Search Results for {search}</h4>
              </div>
            </div>
            <Results item={item}></Results>
          </>
        }
        {item ===null &&
          <div class="row justify-content-center">

            <div className="col-12 mt-5">
              <h5 className="justify-content-center"> Sorry No Matching  Results for {search}</h5>
            </div>


          </div>}

      </div>

    </Layout>

  )
}
export default Searcher
import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAllQuotes = () => {
  const [data, changeData] = useState({
    quotes: [],
    total: 100,
    skip: 0,
    limit: 30,
  });


  const fetchData=()=>{
axios.get("https://dummyjson.com/quotes").then(
  (response)=>{
     changeData(response.data)
  }
)
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            
{
    data.quotes.map(
        (value,index)=>{
            return (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex allign-items-stretch">
                <div class="card">
                  <div class="card-header">{value.quote}</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{value.author}</li>
                  
                  </ul>
                </div>
              </div>
            );
        }
    )
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllQuotes;

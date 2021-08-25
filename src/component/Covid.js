
import React, {useEffect ,useState} from "react";
import "./Covidcss.css";

const Covid = () => {
const [data,setData]=useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
     getCovidData();
  }, []);
  return (
    <>
<section>
      <h1  className="live">LIVE</h1>
      <h2>COVID-19 CORONA VIRUS TRACKER INDIAN</h2>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>our </span>country
              </p>
              <p className="card_total card_small">INDIA</p>
            </div>
          </div>

        </li>
 <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span>recoverd
              </p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>
        </li>
 <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span>confirmed
              </p>
              <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>

        </li>
 <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total</span> death
              </p>
              <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>

        </li>
<li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total</span> active cases
              </p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>

        </li>
      </ul>
</section>
    </>
  );
};
export default Covid;

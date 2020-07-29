import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react';
import Navbar from './component/navbar'
import Home from './component/home'
import Footer from './component/footer'
import State from './component/state_detail'
import Car from './component/carousel'
import "bootstrap/dist/css/bootstrap.min.css"
import {Helmet} from "react-helmet"
function App() {
  return (

    <div style={{background:"#ECEFF1"}}>
      <Helmet>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="theme-color" content="#000000"/>
      <meta name="description" content="India Corona Status"/>
      <meta name="Indian State" content="State Wise Corona"/>
      <meta name="District" content="District Wise Corona"/>
      <meta name="Uttar Pradesh" content="Up Corona Status"/>
      <meta name="Uttar Pradesh" content="Uttar Pradesh Corona Status"/>
      <meta name="Himachal Pradesh" content="Hp Corona Status"/>
      <meta name="Himachal Pradesh" content="Himachal Corona Status"/>
      <meta name="Andhra Pradesh" content="Ap Corona Status"/>
      <meta name="Arunachal Pradesh" content="Arunachal Corona Status"/>
      <meta name="Assam" content="Assam Corona Status"/>
      <meta name="Bihar" content="Bihar Corona Status"/>
      <meta name="Chandigarh" content="Chandigarh Corona Status"/>
      <meta name="Chhattisgarh" content="Chhattisgarh Corona Status"/>
      <meta name="Delhi" content="Delhi Corona Status"/>
      <meta name="Delhi" content="Delhi Corona"/>
      <meta name="Gujarat" content="Gujarat Corona Status"/>
      <meta name="Maharashtra" content="Maharashtra Corona Status"/>
      <meta name="Mumbai" content="Mumbai Corona Status"/>
      <meta name="Manipur" content="Manipur Corona Status"/>
      <meta name="Madhya Pradesh" content="Madhya Pradesh Corona Status"/>
      <meta name="Mizoram" content="Mizoram Corona Status"/>
      <meta name="Nagaland" content="Nagaland Corona Status"/>
      <meta name="Odisha" content="Odisha Corona Status"/>
      <meta name="Punjab" content="Punjab Corona Status"/>
      <meta name="Puducherry" content="Puducherry Corona Status"/>
      <meta name="Rajasthan" content="Rajasthan Corona Status"/>
      <meta name="Sikkim" content="Sikkim Corona Status"/>
      <meta name="Telangana" content="Telangana Corona Status"/>
      <meta name="Tamil Nadu" content="Tamil Nadu Corona Status"/>
      <meta name="Tripura" content="Tripura Corona Status"/>
      <meta name="Uttarakhand" content="Uttarakhand Corona Status"/>
      <meta name="Puducherry" content="Puducherry Corona Status"/>
      <meta name="West Bengal" content="West Bengal Corona Status"/>
      <meta name="Delhi" content="Delhi Status"/>
      <meta name="Chennai" content="Chennai Corona"/>
      <meta name="Pune" content="Pune Corona"/>
      <meta name="Andaman and Nicobar Islands" content="Andaman and Nicobar Islands Corona"/>
      <meta name="Bangalore" content="Bangalore Corona"/>
      
      <title>India Corona Status</title>
            </Helmet>
      <Router>
        <Navbar />
        <br/><br/>
        <div className="container  " style={{paddingLeft:"5%",paddingRight:"5%"}}>
        <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/:statename/:stateid" component={State}/>
              <Route component={Error}/>
        </Switch>
        </div>
        <Car/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;

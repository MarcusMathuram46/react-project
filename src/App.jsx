import React from 'react';
import './styles/App.css';
const App = () => {

  const thirdButtonClick = () => {
    alert('clicked!');
  };
  return(
    <div className="price-cards-container">
      <div className="price-card">
        <p id="grey1">Free</p>
        <h1>$0/month</h1>
        <hr/>
        <p>&#x2713; Single User</p>
        <p>&#x2713; 50GB Storage</p>
        <p>&#x2713; Unlimited Public Projects</p>
        <p>&#x2713; Community Access</p>
        <p id="grey">&#88; Unlimited Private Projects</p>
        <p id="grey">&#88; Dedicated Phone Support</p>
        <p id="grey">&#88; Free Subdomain</p>
        <p id="grey">&#88; Monthly Status Reports</p>
        <button disabled>BUTTON</button>
      </div>

      <div className="price-card">
        <p id="grey1">PLUS</p>
        <h1>$9/month</h1>
        <hr/>
        <p>&#x2713; 5 Users</p>
        <p>&#x2713; 50GB Storage</p>
        <p>&#x2713; Unlimited Public Project</p>
        <p>&#x2713; Community Access</p>
        <p>&#x2713; Unlimited Private Project</p>
        <p>&#x2713; Dedicated Phone Support</p>
        <p>&#x2713; Free Subdomain</p>
        <p id="grey">&#88; Monthly Status Reports</p>
        <button disabled>BUTTON</button>

      </div>

      <div className="price-card">
        <p id="grey1">PRO</p>
        <h1>$49/month</h1>
        <hr/>
        <p>&#x2713; Unlimited Users</p>
        <p>&#x2713; 50GB Storage</p>
        <p>&#x2713; Unlimited Public Project</p>
        <p>&#x2713; Community Access</p>
        <p>&#x2713; Unlimited Private Project</p>
        <p>&#x2713; Dedicated Phone Support</p>
        <p>&#x2713; Free Subdomain</p>
        <p>&#x2713; Monthly Status Reports</p>
        <button>BUTTON</button>

      </div>
    </div>
  )
}

export default App;
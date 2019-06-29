import React, { Component } from 'react';
import './App.css';
import FormSubmitContract from './contracts/FormSubmit.json';
//import TruffleContract from 'truffle-contract';
import getWeb3 from './utils/getWeb3.js';
import $ from 'jquery';


class App extends Component {
state = {
      web3:null,
      email:null,
      password:null,
      address1:null,
      address2:null,
      city:null,
      state:null,
      zip:null,
      accounts:null
    };

  componentDidMount = async () => {
    try{
      const web3 = await getWeb3();
      //console.log(web3);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      const networkId = await web3.eth.net.getId();
      //console.log(networkId);
      //console.log(FormSubmitContract.networks);
      const deployedAddress = FormSubmitContract.networks[networkId].address;
      //console.log(deployedAddress);
      const ContractInstance = new web3.eth.Contract(FormSubmitContract.abi, deployedAddress);
      this.setState({ web3, accounts, contract:ContractInstance }, this.getData);

    }catch(error){
      console.log(error);
    }
}

getData = async() => {
  const {accounts, contract} = this.state;
  console.log(accounts[0]);
  const response = await contract.methods.getData(accounts[0]).call({from:accounts[0]});
      console.log(response);
      // this.setState({})
}

onSubmit = async (event) => {
    event.preventDefault();
    const {accounts, contract} = this.state;
    console.log(accounts[0]);
   // const FormSubmit = await TruffleContract(FormSubmitContract);
   // console.log(FormSubmit);
   // console.log(accounts[0]);
   // await FormSubmit.setProvider(this.state.web3.currentProvider);
   //await contract.deployed();
    //     await contract.methods.setData($("#inputEmail4").val(), $("#inputPassword4").val(),
    //     $("#inputAddress1").val(), $("#inputAddress2").val(), $("#inputCity").val(),
    //     $("#inputState").val(), $("#inputZip").val()).send({from: accounts[0]}, (error,result) => console.log(error)).then(console.log);
    //

    contract.methods.setData(accounts[0], $("#inputEmail4").val(), $("#inputPassword4").val(),
        $("#inputAddress1").val(), $("#inputAddress2").val(), $("#inputCity").val(),
        $("#inputState").val(), $("#inputZip").val()).send({from: accounts[0]});

   //const response = await contract.methods.getData().call();
   //console.log(response);
        //  this.setState
    // this.setState = {}
}

render() {
  return (
    <div className="App">

      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address 1</label>
          <input type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St"/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className ="form-group col-md-6">
            <label htmlFor="inputCity">State</label>
            <input type="text" className="form-control" id="inputState"/>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

<div className="table-responsive-sm">
<table className="table">
<caption>List of users</caption>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Email</th>
    <th scope="col">Address 1</th>
    <th scope="col">Address2</th>
    <th scope="col">City</th>
    <th scope="col">State</th>
    <th scope="col">Zip</th>
  </tr>
</thead>
<tbody>

  <tr>
    <th scope="row">1</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>

</tbody>
</table>
</div>

</div>
  );
 }
}
export default App;

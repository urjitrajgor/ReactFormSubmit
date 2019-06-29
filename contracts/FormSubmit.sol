pragma solidity '0.5.0';

contract FormSubmit{

  struct Student {
    string  email;
    string  password;
    string  address1;
    string  address2;
    string  city;
    string  state;
    string  zip;
}
mapping(address => Student) Students;

  function setData(string memory _email, string memory _password,
    string memory _address1, string memory _address2, string memory _city, string memory _state,
    string memory _zip) public
    {
      Students[msg.sender].email = _email;
      Students[msg.sender].password = _password;
      Students[msg.sender].address1 = _address1;
      Students[msg.sender].address2 = _address2;
      Students[msg.sender].city = _city;
      Students[msg.sender].state = _state;
      Students[msg.sender].zip =_zip;

    }

  function getData(address _address) public view returns(string memory, string memory, string memory, string memory, string memory, string memory, string memory){
      return(Students[_address].email, Students[_address].password, Students[_address].address1, Students[_address].address2, Students[_address].city, Students[_address].state, Students[_address].zip);
  }
}

import React, { Component } from 'react';

class Confirmation extends Component{
    
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        
        const {values: { firstName, lastName, email, phoneNumber, streetAddress, postCode, country }} = this.props;


        return (
          <div className="PersonalDetails">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h2 className="mb-4 mt-5">Credentials</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>First Name: {firstName}</th>
                          <th>Last Name: {lastName} </th>
                          <th>Email: {email} </th>
                          <th>Phone Number: {phoneNumber} </th>
                          
                        </tr>
                        <tr>
                          <th>Street Address: {streetAddress}</th>
                          <th>Post Code: {postCode}</th>
                          <th>Country: {country} </th>
                          
                        </tr>
                      </thead>
                    </table>
                    <input 
                        type="submit" 
                        className="btn btn-info btn-block mt-4" 
                        onClick={this.back} 
                        value = "Back"
                    />
                </div>
            </div>
                  
                    
                    
            </div>
          </div>
        );
    }
}

export default Confirmation;
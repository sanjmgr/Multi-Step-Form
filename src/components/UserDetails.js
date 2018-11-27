import React, { Component } from 'react';

class UserDetails extends Component{
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values } = this.props

        return (
          <div className="PersonalDetails">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  
                  <h2 className="mb-4 mt-5 ">Tell us about yourself</h2>

                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={this.props.handleChange('firstName')}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onChange={this.props.handleChange('lastName')}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={this.props.handleChange('email')}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                       onChange={this.props.handleChange('phoneNumber')}
                      />
                    </div>
                    
                    <input 
                        type="submit" 
                        className="btn btn-info btn-block mt-4" 
                        onClick={this.saveAndContinue} 
                        value = "Continue"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }       
}

export default UserDetails;
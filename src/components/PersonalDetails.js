import React, { Component } from 'react';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props


        return (
          <div className="PersonalDetails">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                   <h2 className="mb-4 mt-5 ">Where do you live?</h2>

                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Street Address"
                        name="streetAddress"
                        value={values.streetAddress}
                        onChange={this.props.handleChange('streetAddress')}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Post Code"
                        name="postCode"
                        value={values.postCode}
                        onChange={this.props.handleChange('postCode')}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        type="text"
                        className="form-control form-control-lg"
                        name="country"
                        value={values.country}
                        onChange={this.props.handleChange('country')}
                      >
                      <option value= 'Select Country'>* Select Country</option>
                      <option value='Nepal'>Nepal</option>
                      <option value='Hong Kong'>Hong Kong</option>
                      <option value="other">Other...</option>

                      </select>
                    </div>
                    
                    <input 
                        type="submit" 
                        className="btn btn-info btn-block mt-4" 
                        onClick={this.back} 
                        value = "Back"
                    />
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

export default PersonalDetails;
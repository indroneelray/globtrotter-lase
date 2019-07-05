import React, {Component} from 'react';

class CurrencyCard extends Component {

    componentDidMount(){
      this.props.getCurrency(1);
    }


    

    render(){
        return(
            <div className="currency-component card px-3 py-2">
             <h3 className = "text-center mb-3">Currency Converter</h3>
                <div className="currency-box">
                    <div className="row">
                    <div className="col-12 text-center">
                       <h5>Value:</h5>
                       <input type="number" id="amount"  onChange = {this.props.handleChange}/>
                    </div>
                    <div className="col-6">
                      <p className="home-currency text-center"><span className="homeCurrency-text">RON</span>: {this.props.amount}</p>
                    </div>
                    <div className="col-6">
                      <p className="foreign-currency text-center"><span className="homeCurrency-text">AED</span>: {parseFloat(this.props.amount*(this.props.foreignCurrency/this.props.homeCurrency)).toFixed(2)}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrencyCard;
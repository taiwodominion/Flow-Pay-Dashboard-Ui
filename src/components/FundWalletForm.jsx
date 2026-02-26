import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, 
  faBuilding, 
  faCreditCard, 
  faMobileAlt, 
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import '../css/FundWalletForm.css';

const FundWalletForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('bank');

  const quickAmounts = [1000, 2000, 5000, 10000, 20000, 50000];
  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: faBuilding, description: 'Transfer to our account', fee: 'Free' },
    { id: 'card', name: 'Debit/Credit Card', icon: faCreditCard, description: 'Pay with your card', fee: '1.5% fee' },
    { id: 'ussd', name: 'USSD', icon: faMobileAlt, description: 'Dial *737*', fee: 'Free' }
  ];

  const calculateFee = () => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    if (selectedMethod === 'card') {
      return amount * 0.015;
    }
    return 0;
  };

  const totalAmount = () => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    return amount + calculateFee();
  };

  return (
    <div className="fundWalletPage">
      <div className="fundWalletHeader">
        <h1 className="fundWalletTitle">
          <FontAwesomeIcon icon={faWallet} className="headerWalletIcon" />
          Fund Wallet
        </h1>
        <p className="fundWalletDescription">Securely add money to your wallet balance</p>
      </div>
      
      <div className="fundWalletCard">
        <div className="cardHeader">
          <h3 className="cardTitle">Wallet Funding</h3>
        </div>
        <div className="cardContent">
          <div className="fundWalletForm">
            <div className="formSection">
              <label className="formLabel">Quick Amounts</label>
              <div className="quickAmountsGrid">
                {quickAmounts.map(amount => (
                  <button
                    key={amount}
                    className={`amountButton ${selectedAmount === amount ? 'amountButtonSelected' : ''}`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="formSection">
              <label className="formLabel" htmlFor="amount">Custom Amount</label>
              <div className="inputWithCurrency">
                <span className="currencyPrefix">₦</span>
                <input
                  type="number"
                  id="amount"
                  className="amountInput"
                  placeholder="Enter amount (Min: ₦100)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  min="100"
                />
              </div>
            </div>

            <div className="formSection">
              <label className="formLabel">Select Payment Method</label>
              <div className="paymentMethods">
                {paymentMethods.map(method => (
                  <div
                    key={method.id}
                    className={`paymentMethodCard ${selectedMethod === method.id ? 'paymentMethodCardSelected' : ''}`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="paymentMethodContent">
                      <div className="paymentMethodIcon">
                        <FontAwesomeIcon icon={method.icon} />
                      </div>
                      <div className="paymentMethodInfo">
                        <p className="paymentMethodName">{method.name}</p>
                        <p className="paymentMethodDescription">{method.description}</p>
                      </div>
                      <div className="paymentMethodFee">
                        <p className="feeText">{method.fee}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="paymentSummary">
              <div className="summaryRow">
                <span>Top-up Amount:</span>
                <span className="summaryAmount">₦{(selectedAmount || parseFloat(customAmount) || 0).toLocaleString()}</span>
              </div>
              <div className="summaryRow">
                <span>Transaction Fee:</span>
                <span className="summaryAmount">₦{calculateFee().toLocaleString()}</span>
              </div>
              <div className="summaryDivider"></div>
              <div className="summaryRow totalRow">
                <span>Total to Pay:</span>
                <span className="summaryTotal">₦{totalAmount().toLocaleString()}</span>
              </div>
            </div>

            <div className="submitSection">
              <button className="submitButton">
                Proceed to Payment
                <FontAwesomeIcon icon={faChevronRight} className="submitIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWalletForm;
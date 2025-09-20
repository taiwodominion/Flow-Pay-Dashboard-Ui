import React, { useState } from 'react';
import '../css/FundWalletForm.css';

const FundWalletForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('bank');

  const quickAmounts = [1000, 2000, 5000, 10000, 20000, 50000];
  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: 'fa-building', description: 'Transfer to our account', fee: 'Free' },
    { id: 'card', name: 'Debit/Credit Card', icon: 'fa-credit-card', description: 'Pay with your card', fee: '1.5% fee' },
    { id: 'ussd', name: 'USSD', icon: 'fa-mobile', description: 'Dial *737*', fee: 'Free' }
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
          <i className="fas fa-wallet"></i>
          Fund Wallet
        </h1>
        <p className="fundWalletDescription">Add money to your wallet balance</p>
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
                        <i className={`fas ${method.icon}`}></i>
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
                <span>Amount:</span>
                <span className="summaryAmount">₦{(selectedAmount || parseFloat(customAmount) || 0).toLocaleString()}</span>
              </div>
              <div className="summaryRow">
                <span>Fee:</span>
                <span className="summaryAmount">₦{calculateFee().toLocaleString()}</span>
              </div>
              <div className="summaryDivider"></div>
              <div className="summaryRow totalRow">
                <span>Total:</span>
                <span className="summaryTotal">₦{totalAmount().toLocaleString()}</span>
              </div>
            </div>

            <div className="submitSection">
              <button className="submitButton">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWalletForm;
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoanSummarySection = () => {
  const [activeTab, setActiveTab] = useState('example');
  const [selectedLoan, setSelectedLoan] = useState('all');

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const loanData = [
    {
      amount: "$500",
      interest: "24.00%",
      term: "6 months",
      fee: "3.00%",
      monthly: "$89.26",
      apr: "29.82%",
      total: "$535.56",
      color: "primary"
    },
    {
      amount: "$1,000",
      interest: "19.00%",
      term: "12 months",
      fee: "5.00%",
      monthly: "$94.56",
      apr: "24.12%",
      total: "$1,134.72",
      color: "secondary"
    },
    {
      amount: "$2,500",
      interest: "16.00%",
      term: "24 months",
      fee: "10.00%",
      monthly: "$126.89",
      apr: "22.93%",
      total: "$3,045.36",
      color: "accent"
    },
    {
      amount: "$5,000",
      interest: "13.00%",
      term: "36 months",
      fee: "12.00%",
      monthly: "$168.33",
      apr: "18.23%",
      total: "$6,059.88",
      color: "highlight"
    }
  ];

  return (
    <section className="loan-summary-section section">
      {/* Animated background elements */}
      <div className="summary-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <Image src="/images/hero_vector_dollar.png" alt="" width={40} height={40} className="float-icon icon-1" />
        <Image src="/images/hero_vector_message.png" alt="" width={40} height={40} className="float-icon icon-2" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-7">
            <div className="section__header text-center">
              <span className="section__header-sub-title headingFour wow fadeInDown" data-wow-duration="0.8s">
                <Image src="/images/title_vector.png" alt="vector" width={20} height={20} />
                Loan Summary
              </span>
              <h2 className="section__header-title wow fadeInUp" data-wow-duration="0.8s">
                Transparent Pricing <span className="highlight-text">Examples</span>
              </h2>
              <p className="section__header-content wow fadeInDown" data-wow-duration="0.8s">
                We are not a lender, but we believe in transparency. Below is an example of what a loan might cost.
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Tabs */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="summary-tabs wow fadeInUp" data-wow-duration="0.8s">
              <button 
                className={`tab-btn ${activeTab === 'example' ? 'active' : ''}`}
                onClick={() => setActiveTab('example')}
              >
                <i className="bi bi-table"></i>
                Example Rates
              </button>
              <button 
                className={`tab-btn ${activeTab === 'compare' ? 'active' : ''}`}
                onClick={() => setActiveTab('compare')}
              >
                <i className="bi bi-bar-chart"></i>
                Compare Loans
              </button>
            </div>
          </div>
        </div>

        {/* Loan Cards View */}
        {activeTab === 'compare' ? (
          <div className="row g-4">
            {loanData.map((loan, index) => (
              <div key={index} className="col-12 col-md-6 col-xl-3">
                <div className={`loan-card wow fadeInUp loan-${loan.color}`} data-wow-duration="0.8s" data-wow-delay={`${index * 0.1}s`}>
                  <div className="loan-card-header">
                    <h3 className="loan-amount">{loan.amount}</h3>
                    <span className="loan-badge">{loan.term}</span>
                  </div>
                  
                  <div className="loan-card-body">
                    <div className="loan-detail-item">
                      <span className="detail-label">Interest Rate</span>
                      <span className="detail-value highlight">{loan.interest}</span>
                    </div>
                    <div className="loan-detail-item">
                      <span className="detail-label">Fee</span>
                      <span className="detail-value">{loan.fee}</span>
                    </div>
                    <div className="loan-detail-item">
                      <span className="detail-label">Monthly Payment</span>
                      <span className="detail-value monthly">{loan.monthly}</span>
                    </div>
                    <div className="loan-detail-item">
                      <span className="detail-label">APR</span>
                      <span className="detail-value apr">{loan.apr}</span>
                    </div>
                    
                    <div className="loan-total">
                      <span className="total-label">Total Payback</span>
                      <span className="total-value">{loan.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="loan-table-wrapper wow fadeInUp" data-wow-duration="0.8s">
                <div className="table-responsive">
                  <table className="loan-table">
                    <thead>
                      <tr>
                        <th>Loan Details</th>
                        <th className="amount-col">$500</th>
                        <th className="amount-col">$1,000</th>
                        <th className="amount-col">$2,500</th>
                        <th className="amount-col">$5,000</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="feature-label">
                          <i className="bi bi-percent"></i>
                          Interest Rate
                        </td>
                        <td className="amount-value">24.00%</td>
                        <td className="amount-value">19.00%</td>
                        <td className="amount-value">16.00%</td>
                        <td className="amount-value">13.00%</td>
                      </tr>
                      <tr>
                        <td className="feature-label">
                          <i className="bi bi-calendar"></i>
                          Loan Term
                        </td>
                        <td className="amount-value">6 months</td>
                        <td className="amount-value">12 months</td>
                        <td className="amount-value">24 months</td>
                        <td className="amount-value">36 months</td>
                      </tr>
                      <tr>
                        <td className="feature-label">
                          <i className="bi bi-tag"></i>
                          Fee
                        </td>
                        <td className="amount-value">3.00%</td>
                        <td className="amount-value">5.00%</td>
                        <td className="amount-value">10.00%</td>
                        <td className="amount-value">12.00%</td>
                      </tr>
                      <tr>
                        <td className="feature-label">
                          <i className="bi bi-wallet2"></i>
                          Monthly Payment
                        </td>
                        <td className="amount-value highlight">$89.26</td>
                        <td className="amount-value highlight">$94.56</td>
                        <td className="amount-value highlight">$126.89</td>
                        <td className="amount-value highlight">$168.33</td>
                      </tr>
                      <tr>
                        <td className="feature-label">
                          <i className="bi bi-graph-up"></i>
                          APR
                        </td>
                        <td className="amount-value apr">29.82%</td>
                        <td className="amount-value apr">24.12%</td>
                        <td className="amount-value apr">22.93%</td>
                        <td className="amount-value apr">18.23%</td>
                      </tr>
                      <tr className="total-row">
                        <td className="feature-label">
                          <i className="bi bi-cash-stack"></i>
                          Total Payback
                        </td>
                        <td className="total-value">$535.56</td>
                        <td className="total-value">$1,134.72</td>
                        <td className="total-value">$3,045.36</td>
                        <td className="total-value">$6,059.88</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consumer Advisory */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-10">
            <div className="consumer-advisory wow fadeInUp" data-wow-duration="0.8s">
              <div className="advisory-icon">
                <i className="bi bi-exclamation-triangle-fill"></i>
              </div>
              <div className="advisory-content">
                <h4>Consumer Advisory</h4>
                <p>
                  Rates range from <strong>5.99% to 35.99% APR</strong> for qualified consumers. 
                  Actual terms vary by lender. This is an example only — your actual rate and terms 
                  will depend on your creditworthiness, income, and other factors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Calculator Link */}

      </div>
    </section>
  );
};

export default LoanSummarySection;
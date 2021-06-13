# PASS PAYSTACK TRANSACTION CHARGE TO CUSTOMER

PaystackTransactionChargeToCustomer provides the implementation to the formula provided by the Paystack support team as regards passing the Paystack transaction charge to customers [Here's the article](https://support.paystack.com/hc/en-us/articles/360009973579-Can-I-pass-the-transaction-charges-to-my-customers-) . 

## Before getting started
This library currently only works with the Nigerian Paystack Charges

**Flat Fee - 100 Naira**
 | 
**Decimal Fee - 1.5%**

### Get Started
This library would help you calculate the total amount to charge the customer including the Paystack charges. All you need to do is ...

[![Version](https://img.shields.io/npm/v/paystack-transaction-charges-to-cus.svg)](https://www.npmjs.com/package/paystack-transaction-charges-to-cus)
[![Downloads](https://img.shields.io/npm/dm/paystack-transaction-charges-to-cus.svg)](https://www.npmjs.com/package/mathjs)
[![Build Status](https://github.com/josdejong/mathjs/workflows/Node.js%20CI/badge.svg)](https://github.com/josdejong/mathjs/actions)
[![Maintenance](https://img.shields.io/maintenance/yes/2021.svg)](https://github.com/josdejong/mathjs/graphs/commit-activity)


## Usage

paystack-transaction-charges-to-cus.js can be used in both node.js and in the browser.

Install paystack-transaction-charges-to-cus.js using [npm](https://www.npmjs.com/package/paystack-transaction-charges-to-cus):

    npm install paystack-transaction-charges-to-cus



```js
import {
  calculateTotalPrice
} from 'paystack-transaction-charges-to-cus'

// functions and constants
calculateTotalPrice(100)                // 101

```


#### Constants

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `DECIMAL_FEE `         | `Double`      | true                |  0.0150               | 
|  `FEE_CAP `               | `int`       | true                |  2000          | 
|  `FLAT_FEE`              | `int`       | true                |  100          | 


## Done 
Checkout Paystack [API](https://paystack.com/docs/) 

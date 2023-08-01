import {Configuration, PaymentMethodsResponse} from '@adyen/react-native';

export const adyenConfig: Configuration = {
  environment: 'test',
  clientKey: 'CLIENT_KEY',
  returnUrl: 'adyentest://payment',
  countryCode: 'NL',
  amount: {currency: 'EUR', value: 1200},
};

export const paymentMethods: PaymentMethodsResponse = {
  paymentMethods: [],
  storedPaymentMethods: [],
};

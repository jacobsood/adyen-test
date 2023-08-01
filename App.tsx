import React, {ReactElement, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  AdyenActionComponent,
  AdyenCheckout,
  AdyenError,
  PaymentMethodData,
  PaymentMethodsResponse,
} from '@adyen/react-native';
import {adyenConfig} from './src/const/adyen.config';
import CheckoutView from './src/component/CheckoutView';
import postData from './src/api/postData';

function App(): ReactElement {
  const paymentMethods: PaymentMethodsResponse = {
    paymentMethods: [
      {
        brands: ['amex', 'cup', 'jcb', 'mc', 'visa'],
        name: 'Credit Card',
        type: 'scheme',
      },
    ],
  };

  const onSubmit = async (
    data: PaymentMethodData,
    component: AdyenActionComponent,
  ) => {
    await postData(data);
    console.log('success', data);
    component.hide(true);
    /* Call your server to make the `/payments` request */
    /* When the API request is completed, you must now call `component.hide(true | false)` to dismiss the payment UI. */
  };

  const onAdditionalDetails = (
    data: PaymentMethodData,
    component: AdyenActionComponent,
  ) => {
    console.log('additional details', data);
    // component.hide(true);
    /* Call your server to make the `/payments/details` request */
    /* When the API request is completed, you must now call `component.hide(true | false)` to dismiss the payment UI. */
  };

  const onError = (error: AdyenError, component: AdyenActionComponent) => {
    console.log('error', error);
    // component.hide(false);
    /* Handle errors or termination by shopper */
    /* When the API request is completed, you must now call `component.hide(false)` to dismiss the payment UI. */
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <AdyenCheckout
            config={adyenConfig}
            paymentMethods={paymentMethods}
            onSubmit={onSubmit}
            onAdditionalDetails={onAdditionalDetails}
            onError={onError}>
            <CheckoutView />
          </AdyenCheckout>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

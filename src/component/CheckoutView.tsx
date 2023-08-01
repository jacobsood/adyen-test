import {useAdyenCheckout} from '@adyen/react-native';
import {Button, View} from 'react-native';

const CheckoutView = () => {
  const {start, paymentMethods: paymentMethodsResponse} = useAdyenCheckout();
  const regularPaymentMethods = paymentMethodsResponse?.paymentMethods;

  const isNotReady = paymentMethodsResponse === undefined;

  if (regularPaymentMethods === undefined) {
    console.error("No regular payment methods in 'paymentMethodsResponse'");
    return <View>Loadings...</View>;
  } else {
    console.log(paymentMethodsResponse);
  }

  return (
    <Button
      title="Open DropIn"
      disabled={isNotReady}
      onPress={() => {
        start('dropIn');
      }}
    />
  );
};

export default CheckoutView;

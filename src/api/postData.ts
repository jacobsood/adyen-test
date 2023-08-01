import {PaymentMethodData} from '@adyen/react-native';

const postData = async (body: PaymentMethodData) => {
  const url = 'https://ray-content-swan.ngrok-free.app/adyen/payment';

  const options: RequestInit = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    console.error('API Call Failed');
  }

  return response.text();
};

export default postData;

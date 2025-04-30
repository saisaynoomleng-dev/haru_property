'use server';

import { client } from '@/sanity/lib/client';
import { FormStateProps } from './types';

export const submitSubscriptionForm = async (
  prevState: FormStateProps,
  formData: FormData,
): Promise<FormStateProps> => {
  const email = formData.get('email')?.toString().trim();

  if (!email) {
    return {
      status: 'error',
      message: 'Email cannot be empty.',
    };
  }

  try {
    await client.create({
      _type: 'subscription',
      email,
    });

    return {
      status: 'success',
      message: 'Thank you for your subscription! ',
    };
  } catch (err) {
    console.error(err);

    return {
      status: 'error',
      message: 'Something went wrong! Please try again.',
    };
  }
};

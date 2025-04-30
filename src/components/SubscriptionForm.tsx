'use client';

import { submitSubscriptionForm } from '@/lib/actions';
import { useActionState, useEffect, useRef } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import clsx from 'clsx';
import { toast } from 'sonner';
import { AlertCircle, CheckCircle } from 'lucide-react';
import Spinner from './Spinner';

const initialState = {
  status: '',
  message: '',
};

const SubscriptionForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action, isPending] = useActionState(
    submitSubscriptionForm,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.status === 'success') {
      toast('Subscribed!', {
        description: state.message,
        icon: <CheckCircle className="text-green-500" />,
        duration: 2000,
      });
      formRef.current?.reset();
    } else {
      toast('Error!', {
        description: state.message,
        icon: <AlertCircle className="text-red-500" />,
        duration: 2000,
      });
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col gap-3 md:max-w-[80%] lg:max-w-[60%]"
    >
      <div>
        <label htmlFor="email">
          <span className="sr-only">Email</span>
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email address"
          autoComplete="off"
        />
      </div>
      <Button
        variant="default"
        type="submit"
        disabled={isPending}
        className={clsx(
          'bg-brand-neutral-100 text-brand-neutral-700',
          isPending && 'disabled:bg-muted',
        )}
      >
        {isPending ? <Spinner className="mr-2" size="sm" /> : 'Subscribe'}
      </Button>
    </form>
  );
};

export default SubscriptionForm;

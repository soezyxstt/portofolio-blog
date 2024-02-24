'use client';

import { quicksand } from '@/lib/font';
import { Dialog } from './aboutMe';
import { handleSubmit } from '@/app/actions';
import { toast } from 'sonner';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const WorkDialog = ({ query }: { query?: string }) => {
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState({ name: false, email: false, message: false });
  const isDirty = !!name && !!email && !!message;
  const isValid = () => {
    return reg.test(email);
  };
  const error = {
    name: name ? false : '* name is required',
    email: reg.test(email) ? false : !email ? '* email is required' : '* invalid email',
    message: message ? false : '* message is required',
  };

  const submit = (formData: FormData) => {
    setLoading(true);
    const handle = handleSubmit.bind(null, formData);
    handle().then((res) => {
      res === 'success'
        ? toast.success('Email sent', {
            description: 'I will get back to you as soon as possible',
            dismissible: true,
          })
        : toast.error('Email send failed', {
            description: 'Please try again later',
            dismissible: true,
          });
    });
    setName('');
    setEmail('');
    setMessage('');
    setShow({ name: false, email: false, message: false });
    setLoading(false);
  };
  return (
    <Dialog
      title='Work with Me'
      open={query === 'work'}
    >
      <div className={`px-4 ${quicksand.className}`}>
        <form action={submit}>
          <div className='mb-4'>
            <label
              className='block text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow bg-transparent appearance-none border border-neutral-700 rounded w-full py-2 px-3 leading-tight focus:outline focus:outline-neutral-300'
              name='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setShow({ ...show, name: true })}
              placeholder='Name'
            />
            {error.name && show.name && (
              <p className='text-red-500 text-xs pl-2 mt-1'>{error.name}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow bg-transparent appearance-none border border-neutral-700 rounded w-full py-2 px-3 leading-tight focus:outline focus:outline-neutral-300'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setShow({ ...show, email: true })}
              placeholder='Email'
            />
            {error.name && show.email && (
              <p className='text-red-500 text-xs pl-2 mt-1'>{error.email}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='shadow bg-transparent appearance-none border border-neutral-700 rounded w-full py-2 px-3 leading-tight focus:outline focus:outline-neutral-300'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setShow({ ...show, message: true })}

              placeholder='Message'
            />
            {error.name && show.message && (
              <p className='text-red-500 text-xs pl-2'>{error.message}</p>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <button
              disabled={!isDirty || !isValid()}
              className={cn(
                'bg-teal-600 hover:bg-teal-700 text-white font-bold py-1.5 px-4 rounded-xl transition-all ml-auto disabled:cursor-not-allowed disabled:bg-neutral-500/50',
                loading && 'cursor-not-allowed bg-neutral-500/50'
              )}
              type='submit'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default WorkDialog;

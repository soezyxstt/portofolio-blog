'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

export async function handleSubmit(formData: FormData) {
  'use server';
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const { name, email, message } = rawData;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    resend.emails
      .send({
        from: 'resend <soezyxst@soezyxst.me>',
        to: 'soezyxst@gmail.com',
        subject: 'New message from your website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: EmailTemplate({
          name: name as string,
          email: email as string,
          message: message as string,
        }),
        reply_to: email as string,
      })
      .then((res) => {
        if (res.data?.id) {
          resend.emails.send({
            from: 'Adi Haditya <soezyxst@soezyxst.me>',
            to: email as string,
            subject: 'Thank you for reaching out',
            text: `Hello ${name},\n\nThank you for reaching out to me. I will get back to you as soon as possible.\n\nBest Regards,\nAdi Haditya`,
          })
        }
      })
    return 'success';
  } catch (error) {
    return 'error';
  }
}
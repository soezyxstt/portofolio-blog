import { quicksand } from '@/lib/font';
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>{`Email from ${name} <${email}>`}</p>
    <p className={quicksand.className}>{message}</p>
  </div>
);

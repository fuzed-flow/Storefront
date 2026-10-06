import React from 'react';
import { SUPPORT_PHONE_HREF, SUPPORT_PHONE_LABEL } from '@/lib/contact';

export default function PhoneLink({ className }) {
  return <a className={className} href={SUPPORT_PHONE_HREF}>{SUPPORT_PHONE_LABEL}</a>;
}

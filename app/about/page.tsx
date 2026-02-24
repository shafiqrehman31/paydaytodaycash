import Image from 'next/image';
import Link from 'next/link';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | Paydaytodaycash',
  description: 'Learn how Paydaytodaycash makes borrowing simple, fast, and transparent. We connect you with trusted lenders across the USA.',
};

export default function AboutPage() {
  return <AboutClient />;
}
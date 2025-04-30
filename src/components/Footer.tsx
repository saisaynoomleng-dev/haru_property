import Image from 'next/image';
import Link from 'next/link';
import Paragraph from './Paragraph';
import Title from './Title';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaSuitcase,
  FaTwitter,
} from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { submitSubscriptionForm } from '@/lib/actions';
import SubscriptionForm from './SubscriptionForm';

const Footer = () => {
  const footerLinks = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about-us' },
    { title: 'Property', url: '/properties' },
    { title: 'Agents', url: '/agents' },
    { title: 'Post a free Property', url: '/post-free-property' },
    { title: 'Post a paid Property', url: '/post-padi-property' },
    { title: 'Blogs', url: '/blogs' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'FAQ', url: '/faqs' },
  ];

  return (
    <footer className="grid grid-cols-2 grid-rows-[1fr_max-content_min-content] gap-5 md:gap-10 p-5 md:p-10 bg-brand-neutral-700 text-brand-neutral-100 dark:bg-brand-neutral-600 dark:text-brand-neutral-200 rounded-l-lg rounded-r-lg">
      <div className="flex flex-col gap-5 col-start-1 row-start-1">
        <div className="space-y-2">
          <Title as="h2">Discover exclusive real estate opportunities</Title>
          <Paragraph className="text-brand-neutral-400 text-fs-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quasi!
          </Paragraph>
        </div>

        {/* form */}
        <SubscriptionForm />
      </div>

      <div className="col-start-1 row-start-3 self-end flex flex-col gap-3">
        <div>
          <Link href="/">
            <Image
              src="/logo-on-black.png"
              priority
              alt=""
              width={150}
              height={100}
              className="min-w-[100px]"
            />
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="https://www.facebook.com"
            className="hover:text-brand-neutral-500 dark:hover:text-brand-neutral-700"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com"
            className="hover:text-brand-neutral-500 dark:hover:text-brand-neutral-700"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com"
            className="hover:text-brand-neutral-500 dark:hover:text-brand-neutral-700"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.x.com"
            className="hover:text-brand-neutral-500 dark:hover:text-brand-neutral-700"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>

      <div className="col-start-1 row-start-2 flex flex-col gap-3">
        <Title as="h3">Contact Us</Title>
        <div className="flex gap-3 text-fs-300">
          <FaEnvelope className="size-5" />
          <div>
            <Paragraph className="text-brand-neutral-500 dark:text-brand-neutral-400 font-bold">
              Email Address
            </Paragraph>
            <Paragraph>info@haruproperty.com</Paragraph>
          </div>
        </div>

        <div className="flex gap-3 text-fs-300">
          <FaPhoneAlt className="size-5" />
          <div>
            <Paragraph className="text-brand-neutral-500 dark:text-brand-neutral-400 font-bold">
              Phone Number
            </Paragraph>
            <Paragraph>(123) 456 7890</Paragraph>
          </div>
        </div>

        <div className="flex gap-3 text-fs-300">
          <FaSuitcase className="size-5" />
          <div>
            <Paragraph className="text-brand-neutral-500 dark:text-brand-neutral-400 font-bold">
              Sales Executives
            </Paragraph>
            <Paragraph>sales@haruproperty.com</Paragraph>
          </div>
        </div>

        <div className="flex gap-3 text-fs-300">
          <IoIosChatbubbles className="size-5" />
          <div>
            <Paragraph className="text-brand-neutral-500 dark:text-brand-neutral-400 font-bold">
              Help & Support
            </Paragraph>
            <Paragraph>Support@haruproperty.com</Paragraph>
          </div>
        </div>
      </div>

      <div className="col-start-2 row-start-3 text-fs-300 place-self-end">
        Copyright &copy; Haru Property | Designed by Sai Say Noom Leng
      </div>

      <div className="col-start-2 row-start-1 row-span-2 space-y-5">
        <Title as="h3">Main Pages</Title>
        <div className="flex flex-col gap-5  justify-around">
          {footerLinks.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className="dark:hover:text-brand-dark-100 hover:text-brand-neutral-500"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

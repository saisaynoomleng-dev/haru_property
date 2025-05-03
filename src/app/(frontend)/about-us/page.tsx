import Bounded from '@/components/Bounded';
import PageTag from '@/components/PageTag';
import Paragraph from '@/components/Paragraph';
import ServiceCard from '@/components/ServiceCard';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaDeezer,
  FaEnvelope,
  FaFlag,
  FaLightbulb,
  FaPhoneAlt,
  FaStar,
  FaUser,
} from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoMdChatboxes } from 'react-icons/io';
import { PiShieldStarFill } from 'react-icons/pi';

const AboutUsPage = () => {
  return (
    <Bounded>
      <div className="flex flex-col gap-2">
        <Title as="h1" size="md">
          About our real estate firm
        </Title>
        <Paragraph className="min-w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
          vero dolore laborum magnam porro praesentium. Maiores, vitae! Beatae,
          odit!
        </Paragraph>

        <div className="flex gap-3">
          <Button variant="default">
            <Link href="/properties">Start exploring</Link>
          </Button>
          <Button variant="link">
            <Link href="/post-properties">Post Properties</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-5">
        <div className="col-span-1 col-start-1 row-start-1 md:col-span-2">
          <Image
            src="/about-1.jpg"
            alt=""
            width={400}
            height={400}
            priority
            className="rounded-lg"
          />
        </div>

        <div className="col-span-1 col-start-2 md:col-span-2 md:row-span-full md:place-self-center">
          <Image
            src="/about-2.jpg"
            alt=""
            width={400}
            height={400}
            priority
            className="rounded-lg"
          />
        </div>

        <div className="col-span-1 col-start-1 row-start-2">
          <Paragraph className="font-medium min-w-full">
            Homes Purchased
          </Paragraph>
          <Paragraph className="text-fs-600 md:text-fs-700 font-bold">
            10k <span className="text-brand-neutral-400">+</span>
          </Paragraph>
          <Paragraph className="text-fs-300">
            Lorem ipsum dolor sit amet.
          </Paragraph>
        </div>

        <div className="col-span-1 col-start-2 row-start-2">
          <Paragraph className="font-medium min-w-full">
            Published properties
          </Paragraph>
          <Paragraph className="text-fs-600 md:text-fs-700 font-bold">
            500k <span className="text-brand-neutral-400">+</span>
          </Paragraph>
          <Paragraph className="text-fs-300">
            Lorem ipsum dolor sit amet.
          </Paragraph>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-3">
          <PageTag
            title="Our Values"
            icon={<PiShieldStarFill />}
            className="self-start"
          />

          <Title as="h2" size="sm">
            The values that drive everything we do
          </Title>

          <Paragraph className="min-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            harum.
          </Paragraph>

          <Button variant="default" className="self-start">
            <Link href="/properties">Start Exploring</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:col-start-2 *:not-last:border-b *:not-last:border-b-brand-neutral-400/30">
          <ServiceCard
            title="Innovation"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nulla, aliquam nemo neque vitae."
            icon={<FaLightbulb />}
          />

          <ServiceCard
            title="Excellence"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nulla, aliquam nemo neque vitae."
            icon={<FaStar />}
          />

          <ServiceCard
            title="Growth"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nulla, aliquam nemo neque vitae."
            icon={<FaDeezer />}
          />

          <ServiceCard
            title="Team Work"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nulla, aliquam nemo neque vitae."
            icon={<FaUserGroup />}
          />

          <ServiceCard
            title="Communication"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nulla, aliquam nemo neque vitae."
            icon={<IoMdChatboxes />}
          />

          <ServiceCard
            title="Ownership"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nulla, aliquam nemo neque vitae."
            icon={<FaFlag />}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <Image
            src="/about-3.jpg"
            width={600}
            height={600}
            style={{ width: 'auto', height: 'auto' }}
            alt=""
            priority
            className="rounded-lg mx-auto object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between items-center ">
          <div className="space-y-5">
            <PageTag title="Our Mission" icon={<FaUser />} />
            <Title as="h3" size="md">
              We have only one goal: To Help you find your dream Home
            </Title>
          </div>
          <div className="space-y-5">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              doloribus possimus nemo tempore quidem, accusantium, cumque
              dolores labore ad ratione nisi blanditiis, quaerat sunt at animi
              ea! Vitae, ipsum sunt?
            </Paragraph>
            <Button>
              <Link href="/properties">Start Exploring</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-brand-neutral-600 space-y-5 p-5 rounded-lg text-brand-neutral-200">
        <div className="flex flex-col gap-5">
          <PageTag title="Our Offices" icon={<FaStar />} />
          <Title as="h3" size="md">
            Come and visit our offices
          </Title>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
          <Paragraph className="text-fs-300 flex-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            alias in quod deleniti dolore eius eveniet voluptas doloremque sunt
            dignissimos.
          </Paragraph>
          <Button className="flex-1 self-end">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden relative h-[400px]">
            <Image
              src="/office-1.jpg"
              width={500}
              height={500}
              alt=""
              priority
              className="col-start-1 row-start-1 brightness-30 absolute z-10 inset-0 max-h-[400px]"
            />
            <div className="flex flex-col gap-5 col-start-1 row-start-1 relative z-20 p-5">
              <Title as="h3" size="sm">
                San Francisco, CA
              </Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                obcaecati.
              </Paragraph>
              <div className="flex gap-2">
                <FaEnvelope />
                <Paragraph>sanfrancisco@haruproperty.com</Paragraph>
              </div>
              <div className="flex gap-2">
                <FaPhoneAlt />
                <Paragraph>(123) 456 7890</Paragraph>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden relative h-[400px]">
            <Image
              src="/office-2.jpg"
              width={500}
              height={500}
              alt=""
              priority
              className="col-start-1 row-start-1 brightness-30 absolute z-10 inset-0 max-h-[400px]"
            />
            <div className="flex flex-col gap-5 col-start-1 row-start-1 relative z-20 p-5">
              <Title as="h3" size="sm">
                Los Angeles, CA
              </Title>
              <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                obcaecati.
              </Paragraph>
              <div className="flex gap-2">
                <FaEnvelope />
                <Paragraph>losangeles@haruproperty.com</Paragraph>
              </div>
              <div className="flex gap-2">
                <FaPhoneAlt />
                <Paragraph>(123) 456 7890</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default AboutUsPage;

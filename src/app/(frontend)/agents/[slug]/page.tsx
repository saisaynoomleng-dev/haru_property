import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import PropertyCard from '@/components/PropertyCard';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { AGENT_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaSuitcase } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';

const AgentDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: agent } = await sanityFetch({
    query: AGENT_QUERY,
    params: await params,
  });

  if (!agent) {
    return <p>Loading</p>;
  }

  return (
    <Bounded className="grid md:grid-cols-2 gap-5 ">
      <div className="flex flex-col gap-5 rounded-lg shadow-sm shadow-brand-dark-400 dark:shadow-brand-light-400/20 p-3 relative z-20">
        <div className="absolute bg-brand-neutral-600 inset-0 h-14 z-10 rounded-lg rounded-bl-none rounded-br-none" />
        <div className="relative z-20">
          {agent.mainImage?.asset?.url && (
            <Image
              src={urlFor(agent.mainImage.asset.url)
                .width(500)
                .height(500)
                .format('webp')
                .url()}
              width={200}
              height={200}
              alt={`${agent.name}'s iamge`}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="max-w-[100px] rounded-full"
            />
          )}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <Title as="h2">{agent.name}</Title>
            <Paragraph className="text-fs-300">@{agent.username}</Paragraph>
          </div>
          <Button variant="link">
            <Link href={`mailto:${agent.email}`}>Contact Me</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope />
          <Paragraph>{agent.email}</Paragraph>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <Paragraph>{agent.phone}</Paragraph>
        </div>

        <div className="flex items-center gap-2">
          <GrLocationPin />
          <Paragraph>{agent.location}</Paragraph>
        </div>

        <div className="flex items-center gap-2">
          <FaSuitcase />
          <Paragraph>{agent.position}</Paragraph>
        </div>
      </div>

      <div className="space-y-5 prose text-brand-neutral-600 dark:text-brand-neutral-200 text-fs-300 ">
        <Title
          as="h3"
          className="text-fs-500 text-brand-neutral-600 dark:text-brand-neutral-200"
        >
          About Me
        </Title>
        {agent?.bio && <PortableText value={agent.bio} />}
      </div>

      <div className="space-y-5 prose min-w-full text-brand-neutral-600 dark:text-brand-neutral-200 text-fs-300 col-span-full ">
        <Title
          as="h3"
          className="text-fs-500 text-brand-neutral-600 dark:text-brand-neutral-200"
        >
          My Experience
        </Title>
        {agent?.experience && <PortableText value={agent.experience} />}
      </div>

      <div className="col-span-full bg-brand-neutral-700 dark:bg-brand-neutral-600 px-3 py-5 rounded-sm space-y-5 text-brand-neutral-100">
        <div className="flex items-center justify-between">
          <Title>Properties from {agent.name}</Title>
          <Button variant="link">
            <Link href="/property">Browse all Properties</Link>
          </Button>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {agent.listing?.map((property) => (
            <PropertyCard key={property.slug?.current} />
          ))}
        </div> */}
      </div>
    </Bounded>
  );
};

export default AgentDetail;

import AgentCard from '@/components/AgentCard';
import Bounded from '@/components/Bounded';
import PageTag from '@/components/PageTag';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { AGENTS_QUERY } from '@/sanity/lib/queries';
import { FaHome } from 'react-icons/fa';

const AgentPage = async () => {
  const { data: agents } = await sanityFetch({ query: AGENTS_QUERY });

  return (
    <Bounded className="py-10">
      <div className="flex justify-center items-center flex-col gap-5 text-center">
        <PageTag title="Our Agents" icon={<FaHome />} />

        <Title size="md" as="h2">
          Meet Our Agents
        </Title>

        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse tenetur
          deleniti illo eum, reiciendis recusandae culpa aut quia dicta
          voluptatem!
        </Paragraph>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center">
        {agents.map((agent) => (
          <AgentCard key={agent.slug?.current} {...agent} />
        ))}
      </div>
    </Bounded>
  );
};

export default AgentPage;

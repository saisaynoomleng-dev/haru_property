import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <Bounded>
      <div className="flex flex-col gap-2">
        <Title as="h1" size="md">
          About our real estate firm
        </Title>
        <Paragraph>
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div></div>
      </div>
    </Bounded>
  );
};

export default AboutUsPage;

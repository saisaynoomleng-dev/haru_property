import { ServiceCardProps } from '@/lib/types';
import Paragraph from './Paragraph';
import Title from './Title';

const ServiceCard = ({ icon, title, body }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-2 pb-5">
      <Paragraph className="text-fs-700">{icon}</Paragraph>
      <Title className="font-semibold text-fs-500">{title}</Title>
      <Paragraph className="text-fs-300">{body}</Paragraph>
    </div>
  );
};

export default ServiceCard;

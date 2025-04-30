import { BiDetail } from 'react-icons/bi';
import { FaHome, FaUserCheck, FaUserPlus } from 'react-icons/fa';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('property').title('Properties').icon(FaHome),
      S.documentTypeListItem('agent').title('Agents').icon(FaUserCheck),
      S.documentTypeListItem('blog').title('Blogs').icon(BiDetail),

      S.divider(),

      S.documentTypeListItem('subscription')
        .title('Subscriptions')
        .icon(FaUserPlus),
    ]);

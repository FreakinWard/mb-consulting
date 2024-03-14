import { gql } from 'graphql-request';

import useGraphQl from '@/hooks/useGraphQl';
import { HeaderData } from '@/models/StrapiResponse';

export const graphQuery = gql`
  query Header {
    header {
      data {
        attributes {
          Title
          Paragraph
        }
      }
    }
  }
`;

const adapter = data => {
  const root = data.header.data.attributes;

  const paragraph = root.Paragraph;
  const title = root.Title;

  return {
    paragraph,
    title,
  };
};

export default function useHeader() {
  return useGraphQl<HeaderData>({
    queryKey: ['header'],
    select: adapter,
    graphQuery,
  });
}
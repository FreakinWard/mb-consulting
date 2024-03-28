import { gql } from 'graphql-request';

import useGraphQl from '@/hooks/useGraphQl';
import { ContactData } from '@/models/StrapiResponse';

export const graphQuery = gql`
  query Contact {
    contact {
      data {
        attributes {
          Title
          Paragraph
          Address
          Phone
          Email
          Facebook
          Twitter
          Youtube
        }
      }
    }
  }
`;

const adapter = data => {
  const root = data.contact.data.attributes;

  const title = root.Title;
  const paragraph = root.Paragraph;
  const phone = root.Phone;
  const address = root.Address;
  const email = root.Email;
  const facebook = root.Facebook;
  const twitter = root.Twitter;
  const youtube = root.Youtube;

  return {
    title,
    paragraph,
    phone,
    address,
    email,
    facebook,
    twitter,
    youtube,
  };
};

export default function useContact() {
  return useGraphQl<ContactData>({
    queryKey: ['header'],
    select: adapter,
    graphQuery,
  });
}
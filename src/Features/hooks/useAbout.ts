import { gql } from 'graphql-request';

import useGraphQl from '@/hooks/useGraphQl';

export const graphQuery = gql`
  query About {
    about {
      data {
        attributes {
          Paragraph
          whys {
            data {
              attributes {
                Why
              }
            }
          }
          whys2 {
            data {
              attributes {
                Why
              }
            }
          }
          Image {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

const adapter = data => {
  const root = data.about.data.attributes;

  const paragraph = root.Paragraph;
  const image = root.Image.data.attributes;

  const whys = root.whys.data.map(x => x.attributes.Why);
  const whys2 = root.whys2.data.map(x => x.attributes.Why);

  return {
    paragraph,
    image: {
      ...image,
      url: `${process.env.strapiApi}${image.url}`,
    },
    whys,
    whys2,
  };
};

export default function useAbout() {
  return useGraphQl({
    queryKey: ['about'],
    select: adapter,
    graphQuery,
  });
}
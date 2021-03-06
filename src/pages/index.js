import React from "react"
import {graphql} from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout'; 
import Post from '../components/Post';
import {Helmet} from 'react-helmet';


export default ({data}) => {
  console.log(data); 
  return(
      <PrimaryLayout column="col-xs-6">
        <Helmet>
          <title>Project: Barcelona</title>
          <meta name="description" content="This is the description of our website" />
          <meta name="keywords" content="gatsby, project, digital works" /> 
          <meta name="robots" content="index,follow" />
        </Helmet>
        {data.allWordpressPost.nodes.map(node =>(
            <Post 
            image={node.featured_media.source_url}
            title={node.title}
            excerpt={node.excerpt} 
            readMore={node.slug}
            />
        ))}

    </PrimaryLayout>
  )

}
  
  
export const query = graphql `
{
  allWordpressPost{
    nodes{
      slug
      title
      excerpt
      featured_media{
        source_url
      }
    }
  }
}
`


// export const query = graphql `
// {
//   allMarkdownRemark{
//     nodes{
//       frontmatter{
//         title
//         date
//         keywords
//         image
//         key
//       }
//       excerpt
//       html
//       fields{
//         slug
//       }
//     }
//   }
// }
// `
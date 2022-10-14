import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

const Post = () => {
  let { slug } = useParams();
  console.log(slug)
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    import(`../markdown/${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostContent(response))
          .catch(err => console.log(err))
      })
  }, []);

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          <Markdown>
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default Post
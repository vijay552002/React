export default function Blog(props) {
    const sidebar =    
   
        props.posts.map((post) =>
          <li key={post.id}>          
          {post.title}
          </li>
        
     
    );
    const content = props.posts.map((post) =>    
    <div key={post.id}>      
    <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    
    return (
      <div>
        <ol>{sidebar}</ol>     
         <hr />
        {content}    
        </div>
    );
  }
  

  

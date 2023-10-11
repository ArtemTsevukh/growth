import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

async function fetchData() {
    const supabase = createClient(
       'https://lfebbmgccwvkghwnkhfj.supabase.co', 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmZWJibWdjY3d2a2dod25raGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MzY3MzMsImV4cCI6MjAxMjExMjczM30.5gsuWrHFfYj3F0akQCHwfnFmp82EqJfowWBdc2lenzw'
    )
    const {data, error} = await supabase.from('posts').select('*')

    if (error) {
        throw error
    }
    
    return data
}

export default async function Post() {
    const blogPosts = await fetchData()
    
    return (
        <div>
      <h1>
        {blogPosts.map((post) => <div key={post.id}>
          <p>{post.title}</p>
          <h2>{post.content}</h2>
          <div>{post.created_at}</div>
         </div> 
         )}
      </h1>
    </div>
    )
}
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

async function fetchData() {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
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
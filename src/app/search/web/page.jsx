import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}`)

  const data = await res.json()
  const results = data.items
  return (
    <>
      {results && results.map(result=> <h2 key={result.id}>{result.title}</h2>)}
    
    </>
  )
}

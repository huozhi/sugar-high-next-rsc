import { highlight } from 'sugar-high'

const text = 
`// next.config.js

module.exports = {
  experimental: {
    runtime: 'edge',
    serverComponents: true,
  }
}
`

export default function Page() {
  return (
    <div>
      <h2>nextjs server components</h2>
      <div className="flex">
        <div className="editor">
          <pre className="pre">
            <code className="pad" id="output" dangerouslySetInnerHTML={{ __html: highlight(text) }} />
          </pre>
          <textarea className="pad absolute-full" id="code" defaultValue={text} />
        </div>
      </div>
    </div>
  )
}

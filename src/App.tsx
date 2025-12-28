function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-base-100 text-base-content p-5">
      <h1 className="text-4xl font-bold font-sans text-primary">Arjun Sharma</h1>
      <h2 className="text-2xl font-mono text-secondary">Full-Stack Developer</h2>
      
      <div className="flex gap-4 mt-8">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
      </div>
      
      <div className="card w-96 bg-base-200 shadow-xl mt-8">
        <div className="card-body">
          <h2 className="card-title">Atomic Design Ready!</h2>
          <p>The project structure and configuration are set up according to the PRD.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-ghost">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
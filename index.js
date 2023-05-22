import Header from "./Header"

function Content() {
  return (
    <div className="body">
    <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be 
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
        if I know React</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer>
        <small>© 2023 Nicholas MacDonald development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
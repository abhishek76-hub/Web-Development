
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)

  const [Todos, setTodos] = useState([
    {
      title: 'I am a Todo',
      desc: 'I am a Good Todo'
    },
    {
      title: 'I am another Todo',
      desc: 'I am a Good Todo too'
    },
    {
      title: 'I am a Grocery Todo',
      desc: 'I am a Good Todo too but i am a grocery todo'
    }
  ])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started</h1>

          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>

          {showbtn ? (
            <button>btn is True</button>
          ) : (
            <button>btn is False</button>
          )}

          {showbtn && (
            <button>
              I Will be Shown only when second btn is clicked
            </button>
          )}

          {Todos.map((todo, index) => (
            <div
              key={index}
              className="m-4 border border-1 border-purple-400"
            >
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => {
            setShowbtn(!showbtn)
            setCount(count + 1)
          }}
        >
          Toggle show btn {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>Documentation</h2>
          <p>Your questions, answered</p>

          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Connect with us</h2>
          <p>Join the Vite community</p>

          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

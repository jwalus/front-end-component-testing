import { Nav, Hero } from './components'

const App = () => (
    <div>
      {/* Header */}
      <div className='bg-blue-900'>
        <Nav />
      </div>
      {/* Body */}
      <div>
        <Hero />
      </div>
    </div>
)

export default App
import { Nav, DropMenuNav } from './components'

const App = () => (
    <div>
      {/* Header */}
      <div className='bg-blue-900'>
        <Nav />
      </div>
      {/* Body */}
      <div className='bg-gray-200'>
        <DropMenuNav />
      </div>
    </div>
)

export default App
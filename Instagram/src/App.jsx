import React from 'react'//*to create a function shortcut is type rfce;
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='d-flex vh-100 '>
      <div className='w-20'><Sidebar/></div>
      <div className='w-50 bg-info'>feed</div>
      <div className='w-30'>Suggestions</div>
    </div>
  )
}

export default App
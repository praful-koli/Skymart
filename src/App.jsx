import { RouterProvider } from 'react-router-dom'
import './features/shared/global.scss'
import {AppRouter} from './routes/app.routes.jsx'
const App = () => {
  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default App
import {Navigate, Route} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('user')
  if (jwtToken === undefined) {
    return <Navigate to="/" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
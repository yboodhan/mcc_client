import React from 'react'

const NonLandingPages = props => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
          fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
      )
      
    return (
        <div>Content</div>
    )
}

export default NonLandingPages;
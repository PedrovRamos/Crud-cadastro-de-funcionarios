import React from 'react'
import { Link } from 'react-router-dom'

interface MyProps {
  linkTo: string
  linkTitle: string
  headerTitle: string
}

class Header extends React.Component<MyProps> {
  render () {
    const { headerTitle, linkTitle, linkTo } = this.props
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid d-flex justify-content-evenly">
            <Link className='navbar-brand' to="#"><strong>{headerTitle}</strong></Link>
            <Link
            to={linkTo}
            className='nav-link text-light'><button className="btn btn-outline-light" type="submit">{linkTitle}</button></Link>
            </div>
        </nav>
    )
  }
}
export default Header

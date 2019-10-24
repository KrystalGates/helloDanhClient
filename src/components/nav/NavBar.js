import React from 'react'
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { Menu, Dropdown } from 'semantic-ui-react'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'
import ApplicationViews from '../../ApplicationViews'


const NavBar = props => {
  const { logout } = useSimpleAuth()

    return (
        <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home' as={Link} to="/"
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            {/* <Menu.Item
              name='login'
              as={Link} to="/login"
            //   active={activeItem === 'logout'}
            //   onClick=<Link className="nav-link" to="/register">Register</Link>
            /> */}
          </Menu.Menu>
          <Dropdown item text='My Settings'>
          <Dropdown.Menu>
            <Dropdown.Item>Contacts</Dropdown.Item>
            <Dropdown.Item>Alerts</Dropdown.Item>
            <Dropdown.Item>My Info</Dropdown.Item>
            <Dropdown.Item onClick={() => {
                                    logout()
                                    props.history.push({
                                        pathname: "/login"
                                    })
                                }
                                }
                            >Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Menu>
        <ApplicationViews/>
      </div>
    )
  }


export default withRouter(NavBar)
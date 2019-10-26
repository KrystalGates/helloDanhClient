import React from 'react'
import { Link } from "react-router-dom"
import { Menu, Dropdown } from 'semantic-ui-react'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'

const NavBar = props => {
  const { logout } = useSimpleAuth()

  props.setIsLoggedIn(true)
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
            <Dropdown.Item name='contacts' as={Link} to="/contacts">Contacts</Dropdown.Item>
            <Dropdown.Item name='alerts' as={Link} to="/alerts">Alerts</Dropdown.Item>
            <Dropdown.Item name='MyInfo' as={Link} to="/MyInfo">My Info</Dropdown.Item>
            <Dropdown.Item onClick={() => {
                                    logout(props.setIsLoggedIn)

                                }
                                }
                            >Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Menu>
      </div>
    )
  }


export default NavBar
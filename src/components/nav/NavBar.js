import React from 'react'
import { Link } from "react-router-dom"
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'
import helloDanhNav from '../../icons/helloDanhNav.png'

const NavBar = props => {
  const { logout } = useSimpleAuth()

  props.setIsLoggedIn(true)
    return (
        <div>
        <Menu pointing secondary className="navBar">
          <Menu.Item
           as={Link} to="/" >
          <Image size='mini' src={helloDanhNav} style={{ marginRight: '1.5em' }} />

           </Menu.Item>
          <Menu.Menu position='right'>
          </Menu.Menu>
          <Dropdown item text='My Settings' style={{marginBottom:".4em", marginRight: '1em'}}>
          <Dropdown.Menu >
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
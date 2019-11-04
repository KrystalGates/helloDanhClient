import React from 'react'
import { Link } from "react-router-dom"
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'
import helloDanhRed from '../../icons/helloDanhRed.svg'

const NavBar = props => {
  const { logout } = useSimpleAuth()

  props.setIsLoggedIn(true)
    return (
        <div>
        <Menu pointing secondary>
          <Menu.Item
           as={Link} to="/">
          <Image size='small' src={helloDanhRed} style={{ marginRight: '1.5em' }} />

           </Menu.Item>
          <Menu.Menu position='right'>
          </Menu.Menu>
          <Dropdown item text='My Settings'>
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
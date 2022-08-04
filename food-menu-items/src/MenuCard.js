
import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { MenuItem } from './MenuItem'
import './MenuCard.css'

export function MenuCard(props) {
  
  const [activeItem , setActiveItem] = useState('All')
  const types = props.types || []

  function handleItemClick(data) {
    setActiveItem(data)
  }

  return (
    <Container fluid>
      <Container textAlign='center'>
        <h2 className='header'>Our Menu</h2>
      </Container>
      <Container textAlign='center'>
        <Menu text>
          {
            types.map((element) => {
              return (
                <Menu.Item
                  name={element.name}
                  key={element.name}
                  active={activeItem === 'All'}
                  onClick={() => handleItemClick(element.name)}
                />
              )
            })
          }
        </Menu>
      </Container>
      <Container textAlign='center'>
        <MenuItem item={props.menuItems} type={activeItem} />
      </Container>
    </Container>
  )
}
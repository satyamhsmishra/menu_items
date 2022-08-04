import { Item, Grid } from 'semantic-ui-react'
import './MenuCard.css';

export function MenuItem(props) {
  const filteredElement = props.item.filter((items) => {
    return items.type === props.type
  })
  const items = props.type === 'All' ? props.item : filteredElement

  return (
    <Grid columns={2} divided>
      <Grid.Row>
      <Grid.Column>
      <Item.Group>
        {
          items.map((items) => {
            return (
              <Item key={items.name}>
                <Item.Image size='tiny' src={items.image} />
                <Item.Content>
                  <Item.Meta as='a'>
                    <div className='cardHeader'>
                      <span className='itemName'>
                        {items.name}
                      </span>
                      <span className='itemPrice'>
                        {items.price}
                    </span>
                    </div>
                  </Item.Meta>
                  <Item.Description>{items.description}</Item.Description>
                </Item.Content>
              </Item>
            )
          })
        }
      </Item.Group>
    </Grid.Column>
  </Grid.Row>
</Grid>  
  )
}
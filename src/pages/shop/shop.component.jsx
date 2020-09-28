import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// because we need to store data we use class
class ShopPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div ClassName="shop-page">
        {
          collections.map(({ id, ...otherSectionProps}) => ( //title, routeName, items
            <CollectionPreview key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;

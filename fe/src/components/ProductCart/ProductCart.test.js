import React from 'react';
import renderer from 'react-test-renderer';
import Product from './Products';

const props = {
  item: {
    "id": "9OyQXs",
    "name": "California Black Beer",
    "nameDisplay": "California Black Beer",
    "description": "A deceptively light bodied dark beer.  This is a refreshing beer with a macho color.  The emphasis is on the malts: light caramel notes with a finish that hints at chocolate and coffee. Ends dry in the mouth.",
    "abv": "4.9",
    "ibu": "10",
    "glasswareId": 5,
    "srmId": 19,
    "availableId": 1,
    "styleId": 103,
    "isOrganic": "N",
    "isRetired": "N",
    "labels": {
      "icon": "https://brewerydb-images.s3.amazonaws.com/beer/9OyQXs/upload_zYaABP-icon.png",
      "medium": "https://brewerydb-images.s3.amazonaws.com/beer/9OyQXs/upload_zYaABP-medium.png",
      "large": "https://brewerydb-images.s3.amazonaws.com/beer/9OyQXs/upload_zYaABP-large.png",
      "contentAwareIcon": "https://brewerydb-images.s3.amazonaws.com/beer/9OyQXs/upload_zYaABP-contentAwareIcon.png",
      "contentAwareMedium": "https://brewerydb-images.s3.amazonaws.com/beer/9OyQXs/upload_zYaABP-contentAwareMedium.png",
      "contentAwareLarge": "https://brewerydb-images.s3.amazonaws.com/beer/9OyQXs/upload_zYaABP-contentAwareLarge.png"
    },
    "status": "verified",
    "statusDisplay": "Verified",
    "foodPairings": "BBQ and red meats, cheeses.",
    "servingTemperature": "cold",
    "servingTemperatureDisplay": "Cold - (4-7C/39-45F)",
    "originalGravity": "1.05",
    "createDate": "2014-09-10 16:30:18",
    "updateDate": "2018-11-02 02:15:14",
    "glass": {
      "id": 5,
      "name": "Pint",
      "createDate": "2012-01-03 02:41:33"
    },
    "srm": {
      "id": 19,
      "name": "19",
      "hex": "A13700"
    },
    "available": {
      "id": 1,
      "name": "Year Round",
      "description": "Available year round as a staple beer."
    },
    "style": {
      "id": 103,
      "categoryId": 8,
      "category": {
        "id": 8,
        "name": "North American Lager",
        "createDate": "2012-03-21 20:06:46"
      },
      "name": "American-Style Dark Lager",
      "shortName": "American Dark Lager",
      "description": "This beer's malt aroma and flavor are low but notable. Its color ranges from a very deep copper to a deep, dark brown. It has a clean, light body with discreet contributions from caramel and roasted malts. Non-malt adjuncts are often used, and hop rates are low. Hop bitterness is clean and has a short duration of impact. Hop flavor, and aroma are low. Carbonation is high. Fruity esters, diacetyl, and chill haze should not be perceived.",
      "ibuMin": "14",
      "ibuMax": "20",
      "abvMin": "4",
      "abvMax": "5.5",
      "srmMin": "14",
      "srmMax": "25",
      "ogMin": "1.04",
      "fgMin": "1.008",
      "fgMax": "1.012",
      "createDate": "2012-03-21 20:06:46",
      "updateDate": "2015-04-07 15:41:42"
    },
    "stock": 25,
    "price": 22.71,
    "formatPrice": "€22,71"
  },
};

describe('(Component) Product', () => {
  it('should render an Products', () => {
    const tree = renderer.create(<Product {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

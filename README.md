# sidebar

> The sidebar module for the OpenTabs FEC. The sidebar module shows the important information for each restaurant (e.g. hours, dress code, cuisines, neighborhood, etc.). There is a map with address on top, when clicked it will open a new tab with Google Maps and the
specific address.

## Related Projects

  - https://github.com/opentabs/menu
  - https://github.com/opentabs/photo-carousel
  - https://github.com/opentabs/reviews
  - https://github.com/opentabs/reservation-calendar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To compile the code, use command line ```npm run react``` to boot up webpack.
To start up the server, ```npm run server-dev```.
To seed the database, run ```npm run db:setup```.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### CRUD API Operations

POST
- '/api/restaurants/info/new'
  - Creates a new entry with information for the sidebar.
- '/api/restaurants/overview/new'
  - Creates a new entry with information for the sidebar.

GET
- '/api/restaurants/:id/info'
  - Reads information for the sidebar entry with the corresponding restaurant id.
- '/api/restaurants/:id/overview'
  - Reads information for the overview entry with the corresponding restaurant id.

PUT
- '/api/restaurants/:id/info/update'
  - Updates information for the sidebar entry with the corresponding restaurant id.
- '/api/restaurants/:id/overview/update'
  - Updates information for the overview entry with the corresponding restaurant id.
    - Restaurant owner may use route to update name, cuisine, tags, and description.
    - System can use route to update rating, review count, and cost range based off changing data.

DELETE
- '/api/restaurants/:id/info/delete'
  - Deletes sidebar entry with the corresponding restaurant id.
- '/api/restaurants/:id/overview/delete'
  - Deletes overview entry with the corresponding restaurant id.

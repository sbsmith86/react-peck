# ReactPeck

This repository is a implementation of the [Peck Engineering Assesment](https://github.com/peck/engineering-assessment).

Once you run the project, you can search for food trucks in SF by zip code, and by specifying a search radius.

### Project Overview

This is a simple Phoenix applicaton with a React frontend.

The Phoenix App serves two endpoints:

```
    post "/foodtrucks", FoodTruckController, :search
    post "/getlocation", FoodTruckController, :getlocation
```

This main entry point to the frontend is `/Users/shaesmith/Desktop/react_peck/assets/js/Main.js`

From here, the functionality is quite simple. The user enters their search, and recieves a list of food trucks based on the API provided by San Francisco's food truck open dataset API.

To start your Phoenix server:

  * Run `mix setup` to install and setup dependencies
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.


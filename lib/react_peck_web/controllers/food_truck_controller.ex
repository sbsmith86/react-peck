defmodule ReactPeckWeb.FoodTruckController do
  use ReactPeckWeb, :controller

  def search(conn, _params) do
    response = HTTPoison.get!("https://data.sfgov.org/resource/rqzj-sfat.json?objectid=364218")
    json(conn, %{data: response.body})
    end
end

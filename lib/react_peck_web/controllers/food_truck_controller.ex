defmodule ReactPeckWeb.FoodTruckController do
  use ReactPeckWeb, :controller

  def search(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.s
    IO.puts "search THIS MOFO"

    # conn
    # |> put_resp_content_type("application/json")
    # |> send_resp(200, [{},{}]) # Send a 200 OK response with the posts in the body
    conn
    |> send_resp(200, []) # Send a 200 OK response with the posts in the body
  end
end

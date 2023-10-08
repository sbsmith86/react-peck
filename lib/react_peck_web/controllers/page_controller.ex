defmodule ReactPeckWeb.PageController do
  use ReactPeckWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.s
    render(conn, :home, layout: false)
  end
end

defmodule ReactPeckWeb.FoodTruckController do
  use ReactPeckWeb, :controller

  def search(conn, params) do
    zip = params["zipCode"]
    IO.inspect zip

    case HTTPoison.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{zip}&sensor=true&key=AIzaSyCHaBrH4J2JxZtLO840VNEkM3jF-1QWJ1s") do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        json(conn, body)
      {:ok, %HTTPoison.Response{status_code: 404}} ->
        IO.puts "Not found :("
      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.inspect reason
    end


    # response = HTTPoison.get!("https://data.sfgov.org/resource/rqzj-sfat.json")
    # json(conn, response.body)
    end

    def getlocation(conn, params) do
      zip = params["zipCode"]

      case HTTPoison.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{zip}&sensor=true&key=AIzaSyCHaBrH4J2JxZtLO840VNEkM3jF-1QWJ1s") do
        {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
          json(conn, body)
        {:ok, %HTTPoison.Response{status_code: 404}} ->
          IO.puts "Not found :("
        {:error, %HTTPoison.Error{reason: reason}} ->
          IO.inspect reason
      end
    end
end

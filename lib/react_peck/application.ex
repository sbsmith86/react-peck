defmodule ReactPeck.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      ReactPeckWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: ReactPeck.PubSub},
      # Start Finch
      {Finch, name: ReactPeck.Finch},
      # Start the Endpoint (http/https)
      ReactPeckWeb.Endpoint
      # Start a worker by calling: ReactPeck.Worker.start_link(arg)
      # {ReactPeck.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ReactPeck.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ReactPeckWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end

# Veramo Agent Deploy

**The official Veramo Docker agent is built from this this source.**

## Environment variables

These are the default environment variables use in the production config.

#### `AGENT_URL`

Set this to your base app url. Your default web:did will be based on this when it gets created on first run.

#### `API_KEY`

Used for authorization

#### `SECRET_KEY`

Used for encrypting the database

#### `AGENT_ENDPOINT`

The url where the agent will be accessible from

#### `PORT`

The port to run the server on

#### `DATABASE_URL`

The database connection string for Postgres

## Deploy to Heroku

You can deploy this directly to Heroku by clicking this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Deploy to Heroku using Docker

You will need to fork this repo and add the following key/value pair to the root of `app.json`. You can then use the same deploy button as above or use the Heroku cli.

```json
{
  "stack": "container"
}
```

## Deploy to Azure Pipelines

Coming soon

## Deploy to Azure Pipelines using docker

Coming soon

## Deploy to AWS

Coming soon

[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Jupyter React Example

This repository contains a simple example that uses [Juypyter React](https://docs.datalayer.io/docs/jupyter/react/index) widgets to create a custom user interface for data analysis.

![Jupyter React Example](./docs/jupyter-react-example.png "Jupyter React Example")

To setup your environment, ensure you have [miniconda](https://docs.conda.io/en/latest/miniconda.html) and [docker](https://docs.docker.com/get-docker) installed on your local environment.

Then run the following instructions to start a local server.

```bash
# Bootstrap your development environment.
conda deactivate && \
  make env-rm # If you want to reset your env.
make env && \
  conda activate jupyter-react-example
```

```bash
# Install the dependencies.
make install
# Build the source.
make build
```

```bash
# Start the local development web server.
echo open http://localhost:3522
make start
```

Enjoy the React widgets on http://localhost:3522

```bash
# Teardown.
make docker-rm
```

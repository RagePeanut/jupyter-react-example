# Copyright (c) Datalayer, Inc https://datalayer.io
# Distributed under the terms of the MIT License.

CONDA_ACTIVATE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda activate ; conda activate
CONDA_DEACTIVATE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda deactivate
CONDA_REMOVE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda remove -y --all -n
ENV_NAME=jupyter-react-example

.PHONY: clean build dist env docker-pull docker-start docker-rm

.EXPORT_ALL_VARIABLES:

VERSION = 0.0.1

default: all ## Default target is all.

help: ## display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

all: clean install build dist ## Clean, install and build.

build:
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		yarn build )

clean:
	yarn clean

env-rm:
	-conda remove -y --all -n ${ENV_NAME}

env:
	-conda env create -f environment.yml
	@echo 
	@echo ------------------------------------------------
	@echo ✨  Jupyter React Example environment is created.
	@echo ------------------------------------------------
	@echo

install:
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		yarn install && \
		pip install -e . )

start:
	echo open http://localhost:3522
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		yarn start )

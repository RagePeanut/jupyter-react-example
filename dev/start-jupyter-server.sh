#!/usr/bin/env bash

# Copyright (c) Datalayer, Inc. https://datalayer.io
# Distributed under the terms of the MIT License.

echo -e "\x1b[34m\x1b[43mStarting Jupyter Server\x1b[0m"
echo
echo ✨ http://localhost:8686/example?token=60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6
echo
echo ✨ http://localhost:8686/example/jupytery_auth/default
echo ✨ http://localhost:8686/example/jupytery_react/default
echo

export CURR_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

jupyter server \
  --config=${CURR_DIR}/jupyter_server_config.py

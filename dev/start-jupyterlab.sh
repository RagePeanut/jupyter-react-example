#!/usr/bin/env bash

# Copyright (c) Datalayer, Inc https://datalayer.io
# Distributed under the terms of the MIT License.

echo
echo open ✨  http://localhost:8888/api/jupyterpool?token=60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6
echo

jupyter lab \
  --ip 0.0.0.0 \
  --port 8888 \
  --ServerApp.token=60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6 \
  --LabApp.base_url=/api/jupyterpool \
  --notebook-dir=./dev/notebooks \
  --collaborative \
  --no-browser

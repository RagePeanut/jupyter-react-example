#!/usr/bin/env bash

# Copyright (c) Datalayer, Inc. https://datalayer.io
# Distributed under the terms of the MIT License.

pkill -f "bash ./start-jupyter-server.sh" || true
pkill -f "bash" || true
pkill -f "jupyter-server" || true

#!/usr/bin/env bash

set -e

if [[ ("$1" = "ipwb") && ("$1" != "$@") && ("$@" != *" -h"*) && ("$@" != *" --help"*) ]]
then
    # Run the IPFS daemon in background, initialize configs if necessary
    ipfs daemon --init &

    # Wait for IPFS daemon to be ready
    while ! curl -s localhost:5001 > /dev/null
    do
        sleep 1
    done
fi

exec "$@"

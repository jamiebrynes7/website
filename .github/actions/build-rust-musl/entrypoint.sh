#!/bin/bash

set -e -x

if [[ -z "${GITHUB_WORKSPACE}" ]]; then
  echo "Set the GITHUB_WORKSPACE env variable."
  exit 1
fi

if [[ -z "${GITHUB_REPOSITORY}" ]]; then
  echo "Set the GITHUB_REPOSITORY env variable."
  exit 1
fi

cd "${GITHUB_WORKSPACE}/kudos"

echo "----> Running tests"
cargo test 

echo "----> Building Rust binary"
cargo build --release --target x86_64-unknown-linux-musl

RELEASE_PATH=${GITHUB_WORKSPACE}/release

echo "----> Build is complete. Publishing to ${RELEASE_PATH}"
mkdir -p "${RELEASE_PATH}"
zip -j "${RELEASE_PATH}/bootstrap" ./target/x86_64-unknown-linux-musl/release/bootstrap 
ls -lah "${RELEASE_PATH}"
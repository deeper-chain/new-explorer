// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import queryString from 'query-string';
import store from 'store';

import { createWsEndpoints } from '@polkadot/apps-config';
import { extractIpfsDetails } from '@polkadot/react-hooks/useIpfs';
import { settings } from '@polkadot/ui-settings';
import { assert } from '@polkadot/util';

function networkOrUrl (apiUrl: string): void {
  if (apiUrl.startsWith('light://')) {
    console.log('Light endpoint=', apiUrl.replace('light://', ''));
  } else {
    console.log('WS endpoint=', apiUrl);
  }
}

function getApiUrl (): string {
  // we split here so that both these forms are allowed
  //  - http://localhost:3000/?rpc=wss://substrate-rpc.parity.io/#/explorer
  //  - http://localhost:3000/#/explorer?rpc=wss://substrate-rpc.parity.io
  const urlOptions = queryString.parse(location.href.split('?')[1]);

  // if specified, this takes priority
  if (urlOptions.rpc) {
    assert(!Array.isArray(urlOptions.rpc), 'Invalid WS endpoint specified');

    // https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9944#/explorer;
    const url = decodeURIComponent(urlOptions.rpc.split('#')[0]);

    assert(url.startsWith('ws://') || url.startsWith('wss://') || url.startsWith('light://'), 'Non-prefixed ws/wss/light url');

    return url;
  }
  return "wss://mainnet-deeper-chain.deeper.network/"
}

// There cannot be a Substrate Connect light client default (expect only jrpc EndpointType)
const apiUrl = getApiUrl();
// set the default as retrieved here
settings.set({ apiUrl });

networkOrUrl(apiUrl);

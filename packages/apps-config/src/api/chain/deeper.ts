
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

export default {
  "Balance": "u128",
  "BlockNumber": "u32",
  "ChannelOf": {
      "sender": "AccountId",
      "receiver": "AccountId",
      "balance": "Balance",
      "nonce": "u64",
      "opened": "BlockNumber",
      "expiration": "BlockNumber"
  },
  "CountryRegion": "Vec<u8>",
  "CreditDelegateInfo": {
      "delegator": "AccountId",
      "score": "u64",
      "validators": "Vec<AccountId>"
  },
  "Duration": "u8",
  "IpV4": "Vec<u8>",
  "Node": {
      "account_id": "AccountId",
      "ipv4": "IpV4",
      "country": "CountryRegion",
      "expire": "BlockNumber"
   },
  "Timestamp": "Moment"
};
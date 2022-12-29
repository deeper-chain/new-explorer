// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import { externalLogos } from '../ui/logos';

export default {
  chains: {
    'Deeper Network': 'deeper',
    Acala: 'acala',
    'Acala Mandala TC5': 'acala-testnet',
    'Aleph Zero': 'alephzero',
    Altair: 'altair',
    Arctic: 'arctic',
    Astar: 'astar',
    Basilisk: 'basilisk',
    Bifrost: 'bifrost-kusama',
    'Bifrost Polkadot': 'bifrost',
    'Calamari Parachain': 'calamari',
    Centrifuge: 'centrifuge',
    ChainX: 'chainx',
    Clover: 'clv',
    'Composable Finance': 'composable',
    'Crab Parachain': 'crab-parachain',
    Crust: 'crust',
    'Crust Maxwell': 'maxwell',
    'Crust Shadow': 'shadow',
    'Dali Testnet (Rococo Relay)': 'dali',
    Darwinia: 'darwinia',
    'Darwinia Crab': 'crab',
    'Darwinia Parachain': 'darwinia-parachain',
    'DataHighway Tanganika Kusama Parachain': 'datahighway',
    Dock: 'dock',
    'Dolphin Parachain Testnet': 'dolphin',
    Edgeware: 'edgeware',
    Efinity: 'efinity',
    'Encointer on Kusama': 'encointer',
    'Equilibrium parachain': 'equilibrium',
    Genshiro: 'genshiro',
    HydraDX: 'hydradx',
    'Integritee Network (Kusama)': 'integritee',
    Interlay: 'interlay',
    'KILT Peregrine': 'kilt-testnet',
    'KILT Spiritnet': 'spiritnet',
    Karura: 'karura',
    Khala: 'khala',
    Kulupu: 'kulupu',
    Kusama: 'kusama',
    Litmus: 'litmus',
    'Mangata Kusama Mainnet': 'mangatax',
    'Mangata Public Testnet': 'mangata-testnet',
    Moonbase: 'moonbase',
    Moonbeam: 'moonbeam',
    Moonriver: 'moonriver',
    'Nodle Parachain': 'nodle',
    Pangolin: 'pangolin',
    'Pangolin Parachain': 'pangolin-parachain',
    Pangoro: 'pangoro',
    Parallel: 'parallel',
    'Parallel Heiko': 'parallel-heiko',
    Phala: 'phala',
    Picasso: 'picasso',
    'Pioneer Network': 'pioneer',
    Polkadex: 'polkadex',
    Polkadot: 'polkadot',
    Polymesh: 'polymesh',
    'Polymesh Testnet': 'polymesh-testnet',
    'QUARTZ by UNIQUE': 'quartz',
    Robonomics: 'robonomics',
    Rockmine: 'rockmine',
    Rococo: 'rococo',
    SORA: 'sora',
    'Shibuya Testnet': 'shibuya',
    Shiden: 'shiden',
    Stafi: 'stafi',
    Statemine: 'statemine',
    Statemint: 'statemint',
    'Subspace Gemini 2a': 'subspace',
    'Turing Network': 'turing',
    UNIQUE: 'unique',
    Westend: 'westend',
    Zeitgeist: 'zeitgeist',
    kintsugi: 'kintsugi'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://${chain}.subscan.io/${path}/${data.toString()}`,
  isActive: true,
  logo: externalLogos.subscan as string,
  paths: {
    address: 'account',
    block: 'block',
    bounty: 'bounty',
    council: 'council',
    extrinsic: 'extrinsic',
    proposal: 'democracy_proposal',
    referendum: 'referenda',
    techcomm: 'tech',
    tip: 'treasury_tip',
    treasury: 'treasury',
    validator: 'validator'
  },
  url: 'https://subscan.io/'
};

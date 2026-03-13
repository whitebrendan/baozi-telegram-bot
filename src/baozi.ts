import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@coral-xyz/anchor';

export const BAOZI_PROGRAM_ID = new PublicKey('FWyTPzm5cfJwRKzfkscxozatSxF6Qu78JQovQUwKPruJ');

export async function listMarkets(connection: Connection) {
    // Implementation to fetch markets from Solana mainnet
    console.log('Listing markets from mainnet...');
    return [];
}

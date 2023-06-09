export interface Character {
    collectionName: string;
    collectionDescription: string;
    collectionImage: string;
    collectionBackgroundImage: string;
    stats: Stats;
    marketplaceURL: string,
    collectionIdHash: string,
    enumValue: number,
}

export const statMetrics = ['speed', 'strength', 'defense'] as const;

export type Stats = {
    [key in typeof statMetrics[number]]: number;
}
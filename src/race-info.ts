import { Circuit } from './circuit';

export interface RaceInfo {
    season: string;
    round: string;
    url: string;
    raceName: string;
    date: string;
    time: string;
    Circuit: Circuit;
}

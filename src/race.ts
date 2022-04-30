import { Circuit } from './circuit';
import { Result } from './result';

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    date: string;
    time: string;
    Circuit: Circuit;
    Results: Result[];
}

import { RaceResultsRow } from './race-results-row';
import { RaceInfo } from './race-info';

export interface RaceResults extends RaceInfo {
    Results: RaceResultsRow[];
}

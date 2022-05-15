import { RaceInfo } from './race-info';
import { QualifyingResultsRow } from './qualifying-results-row';

export interface QualifyingResults extends RaceInfo {
    QualifyingResults: QualifyingResultsRow[];
}

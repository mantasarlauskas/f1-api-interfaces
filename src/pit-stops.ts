import { RaceInfo } from './race-info';
import { PitStop } from './pit-stop';

export interface PitStops extends RaceInfo {
    PitStops: PitStop[];
}

import { Lap } from './lap';
import { RaceInfo } from './race-info';

export interface Laps extends RaceInfo {
    Laps: Lap[];
}

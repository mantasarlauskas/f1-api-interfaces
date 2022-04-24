import { Race } from './race';
import { Lap } from './lap';
import { PitStop } from './pit-stop';

export enum RaceLapsKey {
    PIT_STOPS = 'PitStops',
    LAPS = 'Laps',
}

export interface RaceLaps extends Race {
    [RaceLapsKey.LAPS]?: Lap[];
    [RaceLapsKey.PIT_STOPS]?: PitStop[];
}

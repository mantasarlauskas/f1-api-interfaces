import { DriverStandingsRow } from './driver-standings-row';
import { StandingsList } from './standings-list';

export interface DriverStandings extends StandingsList {
    DriverStandings: DriverStandingsRow[];
}

import { ConstructorStandings } from './constructor-standings';
import { DriverStandings } from './driver-standings';

export enum StandingsKey {
    CONSTRUCTORS = 'ConstructorStandings',
    DRIVERS = 'DriverStandings',
}

export interface StandingsList {
    [StandingsKey.CONSTRUCTORS]?: ConstructorStandings[];
    [StandingsKey.DRIVERS]?: DriverStandings[];
}

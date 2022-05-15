import { ConstructorStandingsRow } from './constructor-standings-row';
import { StandingsList } from './standings-list';

export interface ConstructorStandings extends StandingsList {
    ConstructorStandings: ConstructorStandingsRow[];
}

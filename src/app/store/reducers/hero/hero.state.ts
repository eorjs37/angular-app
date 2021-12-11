import { Hero } from "src/app/models/hero";
export interface HeroState{
    heroes: Hero[],
    selectedHero: any,
    error?: any;
}
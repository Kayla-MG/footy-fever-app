export interface Matches{
  name : string,
  rounds : matches[]  

}
interface matches{
    date : string,
    team1: string,
    team2 : string,
    score : Score,
}
interface Score{
    ft: number[];
}
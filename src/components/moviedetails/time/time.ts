export function time(time:any){
const hours=time/60
const hourtime:number=Math.floor(hours)
const minuteTime=hours-hourtime

return(`${hourtime}h`)
}
import "./trendingcontent.css"
import MovieCard from "../../discover/moviecard/movieCard";
import { todayContent } from "../../../module/todayContentModule";

import { data, weeklyContent } from "../../../module/weeklyDataModel";
interface Props {
    selected: number,
    weeklyData: weeklyContent|undefined
    todayContent: todayContent|undefined
}

function TrendingContent(props: Props): any {
 
    if (props.selected == 1) {

        return (
            <MovieCard  data={props.weeklyData}/>
        )

    } else if (props.selected == 0) {
       
        return (
            <MovieCard  data={props.todayContent}/>
        )

    }
    else {
        return (<div>
            loading
        </div>)
    }
}
export default TrendingContent
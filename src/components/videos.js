import Video from "./video";
import classes from "../style/videos.module.css";

export default function Videos(){
    return (
       <div className={classes.videos}>
        <Video/>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
       </div>
    );
}
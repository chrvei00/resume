import { start } from "repl";
import { NavLink } from "../../page";

export const nearestIndex: any = (
  currentPosition: number,
  startIndex: number,
  endIndex: number,
  sectionPositionArray: NavLink[],
  innerHeight: number
) => {
  if (startIndex === endIndex) return startIndex;
  else if (
    sectionPositionArray[startIndex].ref.current === null ||
    sectionPositionArray[endIndex].ref.current === null
  )
    return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].ref.current!.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].ref.current!.offsetTop - currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  }

  //Check if we are at the end of the page
  else if (
    sectionPositionArray[endIndex].ref.current!.offsetTop <=
    currentPosition + innerHeight * 0.75
  ) {
    return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    if (
      sectionPositionArray[nextNearest] == null ||
      sectionPositionArray[nextNearest + 1] == null ||
      sectionPositionArray[nextNearest].ref.current == null ||
      sectionPositionArray[nextNearest + 1].ref.current == null
    ) {
      return startIndex;
    }
    var a = Math.abs(
      sectionPositionArray[nextNearest].ref.current!.offsetTop - currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].ref.current!.offsetTop -
        currentPosition
    );

    if (a < b) {
      return nearestIndex(
        currentPosition,
        startIndex,
        nextNearest,
        sectionPositionArray
      );
    } else {
      return nearestIndex(
        currentPosition,
        nextNearest,
        endIndex,
        sectionPositionArray,
        innerHeight
      );
    }
  }
};

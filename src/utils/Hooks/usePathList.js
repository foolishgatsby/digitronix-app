import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function transformArrayToStrings(arr) {
  return arr
    .map((item, index) => {
      // For the first item, its href is simply "/admin"
      if (index === 0) {
        return { title: item, href: `/${item}` };
      }
      // For subsequent items, build the href based on all previous items in the array
      else {
        const href = arr.slice(0, index + 1).reduce((acc, cur, i) => {
          // For the first item in the reduce function, start with an empty accumulator
          if (i === 0) {
            return `/${cur}`;
          }
          // For subsequent items, append to the accumulator
          else {
            return `${acc}/${cur}`;
          }
        }, "");

        return { title: item, href };
      }
    })
    .map((item, index, finalArray) => {
      // For the last item, remove the href property
      if (index === finalArray.length - 1) {
        return { title: item.title };
      }
      return item;
    });
}

export function usePathList() {
  const [pathList, setPathList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const items = location.pathname.split("/").slice(1);
    // console.log(items);
    // const setItems = items.map((item, index) => {
    //   if (index !== 0) {
    //     return { title: item, href: `/${items[index - 1]}/${item}` };
    //   } else if (index === items.length - 1) {
    //     return { title: item };
    //   } else {
    //     return { title: item, href: `/${item}` };
    //   }
    // });
    const setItems = transformArrayToStrings(items);
    // console.log(setItems);

    setPathList(setItems);
  }, [location]);

  return pathList;
}

import React, {
  createElement as CE,
  useContext,
  useMemo,
  FC,
  memo,
  useRef
} from "react";
import { AppContext, QKLine, qk } from "src/ducks";
import * as colors from "@material-ui/core/colors";
import makeStyles from "@material-ui/styles/makeStyles";
import useElementSize from "src/useElementSizeHook";

const M = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20
  },
  ROAD_WIDTH = 20,
  gTranslate = `translate(${M.left},${M.top})`;

const EMPTY = {};

export default () => {
  const { state } = useContext(AppContext),
    containerRef = useRef<HTMLDivElement>(),
    { width } = useElementSize(containerRef),
    classes = useStyles({ width }),
    R = width / 2 - ROAD_WIDTH / 2;
  return (
    <div ref={containerRef} className={classes.container}>
      <svg className={classes.svg}>
        <g transform={`translate(${width / 2},${width / 2})`}>
          <circle className={classes.road} r={R} />
          <g>
            {state.cars.map(car => (
              <rect
                key={car.id}
                transform={`rotate(${(car.x / 1000) * 360}) translate(0,${-R -
                  1.5})`}
                className={classes.car}
                rx="1"
                ry="1"
                width="3.5"
                height="2"
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

const useStyles = makeStyles({
  dot: {
    fill: colors.pink["500"],
    stroke: "white",
    strokeWidth: "2px"
  },
  path: {
    strokeWidth: "4px",
    fill: "none",
    stroke: colors.lightBlue["A700"],
    opacity: 0.8
  },
  container: {
    position: "relative",
    // padding: '0 40px',
    boxSizing: 'border-box',
    width: "100%"
    // height: "100%"
  },
  line: {
    strokeWidth: "1.5px",
    stroke: colors.lightBlue["A400"],
    strokeDasharray: "2,2"
  },
  svg: {
    width: "100%",
    height: ({ width }: { width: number }) => width,
    "& text": {
      fontFamily: "Puritan, san-serif",
      fontSize: "11px"
    }
  },
  cut: {
    stroke: colors.grey["700"],
    strokeWidth: "2px",
    fill: colors.green["A200"],
    fillOpacity: 0.2
  },
  car: {
    fill: colors.purple["A400"]
    // stroke: 'black'
    // stroke: colors.grey["800"]
  },
  masked: {
    mask: "url(#myMask2)"
  },
  maskedLines: {
    mask: "url(#myMask3)"
  },
  road: {
    stroke: colors.grey["300"],
    strokeWidth: ROAD_WIDTH,
    fill: "none"
  },
  axis: {
    strokeWidth: "2px",
    color: colors.grey["800"]
  },
  qdot: {
    fill: colors.pink.A400,
    stroke: "white",
    strokeWidth: "2px"
  },
  kdot: {
    fill: colors.orange.A700,
    stroke: "white",
    strokeWidth: "2px"
  },
  text: {
    textAlign: "center",
    fontSize: "10px"
  }
});

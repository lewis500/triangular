import React, {
  createElement as CE,
  useContext,
  useMemo,
  FC,
  memo,
  useRef
} from "react";
import { AppContext, QKLine, qk } from "src/ducks";
import * as params from "src/params";
import * as colors from "@material-ui/core/colors";
import makeStyles from "@material-ui/styles/makeStyles";
import TexLabel from "src/components/TexLabel";
import useElementSize from "src/useElementSizeHook";
import Arrow from "src/components/Arrow";
import useScale from "src/useScale";

const M = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 10
  },
  gTranslate = `translate(${M.left},${M.top})`;

const marginer = ({ width, height }: { width: number; height: number }) => ({
  width: Math.max(width - M.left - M.right, 0),
  height: Math.max(height - M.top - M.bottom, 0)
});

const EMPTY = {};

export default () => {
  const { state } = useContext(AppContext),
    containerRef = useRef<HTMLDivElement>(),
    { width, height } = marginer(useElementSize(containerRef)),
    classes = useStyles(EMPTY),
    kScale = useScale([0, width], [0, params.kj * 1.1], [width]),
    qScale = useScale([height, 0], [0, params.q0 * 1.2], [height]),
    QKPath = useMemo(() => {
      let d = "M" + QKLine.map(([k, q]) => [kScale(k), qScale(q)]).join("L");
      return <path className={classes.path} d={d} />;
    }, [width, height]);
  return (
    <div ref={containerRef} className={classes.container}>
      <svg className={classes.svg}>
        <Arrow />
        <g transform={gTranslate}>
          <mask id="myMask4">
            <rect width={width} height={height} fill="white" />
          </mask>
          <g mask="url(#myMask4)">
            {QKPath}
            <circle
              cx={kScale(state.k)}
              cy={qScale(qk(state.k))}
              className={classes.dot}
              r={6}
            />
          </g>
          <g id="g-qaxis">
            <path
              d={`M0,0L0,${height}`}
              fill="none"
              stroke="black"
              className={classes.axis}
              markerStart="url(#arrow)"
            />
            <TexLabel dy={qScale(params.q0)-12} dx={-15} latexstring="q_0" />
            <TexLabel dx={-10} dy={-25} latexstring="q \; \text{veh/s}" />
          </g>

          <g transform={`translate(0,${height})`} id="g-kaxis">
            <path
              d={`M0,0L${width},0`}
              fill="none"
              stroke="black"
              markerEnd="url(#arrow)"
              className={classes.axis}
            />
            {/* <path
              d={`M0,0L${width},0`}
              fill="none"
              stroke="black"
              markerEnd="url(#arrow)"
              className={classes.axis}
            /> */}
            <TexLabel dx={kScale(params.k0)} dy={0} latexstring="k_0" />
            <TexLabel
              dx={width - 70}
              dy={5}
              latexstring="k \; \text{(veh/100 m)}"
            />
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
    width: "100%",
    height: "100%"
  },
  line: {
    strokeWidth: "1.5px",
    stroke: colors.lightBlue["A400"],
    strokeDasharray: "2,2"
  },
  svg: {
    width: "100%",
    height: "100%",
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
    stroke: colors.grey["300"]
    // opacity: .95
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

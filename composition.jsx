import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, Img, Sequence, useCurrentFrame, interpolate, staticFile, spring, useVideoConfig } from "remotion";
const Title = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const scale = spring({ frame, fps: 30, config: { stiffness: 100, damping: 10 } });
  return /* @__PURE__ */ jsxDEV("h1", { style: {
    fontSize: "72px",
    color: "white",
    textAlign: "center",
    textShadow: "0 0 10px black",
    opacity,
    transform: `scale(${scale})`
  }, children: text }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 5
  });
};
const Background = ({ src }) => /* @__PURE__ */ jsxDEV(AbsoluteFill, { children: /* @__PURE__ */ jsxDEV(Img, { src, style: { width: "100%", height: "100%", objectFit: "cover" } }, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 24,
  columnNumber: 5
}) }, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 23,
  columnNumber: 3
});
const Character = ({ src, x, y, scale = 1, flip = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bounce = Math.sin(frame / (fps / 4)) * 10;
  const entry = spring({ frame, fps, durationInFrames: 30 });
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { justifyContent: "center", alignItems: "center" }, children: /* @__PURE__ */ jsxDEV(
    Img,
    {
      src,
      style: {
        position: "absolute",
        width: `${200 * scale}px`,
        bottom: `${y}%`,
        left: `${x}%`,
        transform: `translateX(-50%) translateY(${bounce}px) scaleX(${flip ? -1 : 1}) scale(${entry})`
      }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 7
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 35,
    columnNumber: 5
  });
};
const Scene = ({ children }) => /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#333", justifyContent: "center", alignItems: "center" }, children }, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 51,
  columnNumber: 3
});
const MyComposition = ({ scene, strength }) => {
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { children: [
    scene === "intro" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("village.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 62,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: 50, y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "A dragon attacks!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 61,
      columnNumber: 9
    }),
    scene === "to_cave" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("village.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 12
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: interpolate(useCurrentFrame(), [0, 90], [50, 110]), y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 70,
        columnNumber: 12
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "Onwards!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 71,
        columnNumber: 12
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 68,
      columnNumber: 9
    }),
    scene === "cave_choice" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("cave.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 76,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: 30, y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 77,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "A mysterious chest..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 78,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 75,
      columnNumber: 10
    }),
    scene === "chest_open" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("cave.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 83,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: 50, y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 84,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("sword.png"), x: 50, y: 40, scale: spring({ frame: useCurrentFrame(), fps: 30, from: 0, to: 1.5 }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 85,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "Found a Sword! STR +5" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 86,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 82,
      columnNumber: 9
    }),
    scene === "dragon_fight" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("cave.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 91,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: 25, y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 92,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("dragon.png"), x: 75, y: 35, scale: 1.5, flip: true }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 93,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "The Dragon!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 94,
        columnNumber: 12
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 90,
      columnNumber: 9
    }),
    scene === "fight_result" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("cave.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 99,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: interpolate(useCurrentFrame(), [0, 30], [25, 60], { extrapolateRight: "clamp" }), y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 100,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("dragon.png"), x: 75, y: 35, scale: 1.5, flip: true }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 98,
      columnNumber: 9
    }),
    scene === "victory" && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(Background, { src: staticFile("village.png") }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 106,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Character, { src: staticFile("hero.png"), x: 50, y: 25 }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 107,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "VICTORY!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 108,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 105,
      columnNumber: 9
    }),
    (scene === "game_over_coward" || scene === "game_over_eaten" || scene === "game_over_weak") && /* @__PURE__ */ jsxDEV(Scene, { children: [
      /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "maroon" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 113,
        columnNumber: 12
      }),
      /* @__PURE__ */ jsxDEV(Title, { text: "GAME OVER" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 114,
        columnNumber: 12
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 112,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 59,
    columnNumber: 5
  });
};
export {
  MyComposition
};

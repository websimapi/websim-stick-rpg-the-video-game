import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useMemo } from "react";
import { Player } from "@websim/remotion/player";
import { MyComposition } from "./composition.jsx";
const scenes = {
  intro: {
    duration: 120,
    // 4s
    choices: [
      { text: "Fight the Dragon!", nextScene: "to_cave" },
      { text: "Run away.", nextScene: "game_over_coward" }
    ]
  },
  to_cave: { duration: 90, nextScene: "cave_choice" },
  cave_choice: {
    duration: 120,
    choices: [
      { text: "Open the chest.", nextScene: "chest_open", action: (s) => ({ ...s, strength: s.strength + 5 }) },
      { text: "Leave it alone.", nextScene: "dragon_fight" }
    ]
  },
  chest_open: { duration: 90, nextScene: "dragon_fight" },
  dragon_fight: {
    duration: 120,
    choices: [
      { text: "Attack with sword!", nextScene: "fight_result" },
      { text: "Try to talk to it.", nextScene: "game_over_eaten" }
    ]
  },
  fight_result: { duration: 150, dynamicNextScene: (stats) => stats.strength > 5 ? "victory" : "game_over_weak" },
  victory: { duration: 180, choices: [{ text: "Play Again", nextScene: "intro" }] },
  game_over_coward: { duration: 150, choices: [{ text: "Try Again", nextScene: "intro" }] },
  game_over_eaten: { duration: 150, choices: [{ text: "Try Again", nextScene: "intro" }] },
  game_over_weak: { duration: 150, choices: [{ text: "Try Again", nextScene: "intro" }] }
};
const initialStats = {
  strength: 5
};
const Game = () => {
  const [gameState, setGameState] = useState({
    scene: "intro",
    ...initialStats,
    key: 0
    // Used to force re-render of player
  });
  const audioContext = useMemo(() => new (window.AudioContext || window.webkitAudioContext)(), []);
  const playSound = (url) => {
    fetch(url).then((response) => response.arrayBuffer()).then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer)).then((audioBuffer) => {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    });
  };
  const currentSceneData = scenes[gameState.scene];
  const handleChoice = (choice) => {
    playSound("./click.mp3");
    let newStats = { ...gameState };
    if (choice.action) {
      newStats = choice.action(newStats);
    }
    let nextScene = choice.nextScene;
    if (currentSceneData.dynamicNextScene) {
      nextScene = currentSceneData.dynamicNextScene(newStats);
    }
    const statsToSet = nextScene === "intro" ? initialStats : newStats;
    setGameState({
      ...statsToSet,
      scene: nextScene,
      key: gameState.key + 1
    });
  };
  const handleCompositionEnded = () => {
    if (currentSceneData.nextScene) {
      setGameState((s) => ({ ...s, scene: currentSceneData.nextScene, key: s.key + 1 }));
    } else if (currentSceneData.dynamicNextScene) {
      const nextScene = currentSceneData.dynamicNextScene(gameState);
      if (nextScene === "victory") playSound("./victory.mp3");
      else playSound("./defeat.mp3");
      setGameState((s) => ({ ...s, scene: nextScene, key: s.key + 1 }));
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "game-container", children: [
    /* @__PURE__ */ jsxDEV("h1", { children: "Stick RPG: The Video Game" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 97,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "player-container", children: [
      /* @__PURE__ */ jsxDEV(
        Player,
        {
          component: MyComposition,
          durationInFrames: currentSceneData.duration,
          fps: 30,
          compositionWidth: 540,
          compositionHeight: 960,
          controls: false,
          autoplay: true,
          loop: false,
          inputProps: { scene: gameState.scene, strength: gameState.strength },
          onEnded: handleCompositionEnded,
          style: { width: "100%", height: "100%" }
        },
        gameState.key,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 99,
          columnNumber: 9
        }
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "ui-overlay", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "stats-display", children: [
          "STR: ",
          gameState.strength
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 114,
          columnNumber: 11
        }),
        currentSceneData.choices && /* @__PURE__ */ jsxDEV("div", { className: "choices-container", children: currentSceneData.choices.map((choice) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "choice-button",
            onClick: () => handleChoice(choice),
            children: choice.text
          },
          choice.text,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 120,
            columnNumber: 17
          }
        )) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 118,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 113,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 98,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 96,
    columnNumber: 5
  });
};
export {
  Game
};

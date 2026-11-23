# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/lpy214/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/lpy214/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Neon Snake — a tiny browser game an AI agent built from exactly one prompt, for make.fun's "The agent builds a game from one prompt" bounty. A short video of the prompt, the agent building it, and the finished game running is posted on X (see `POST.json` for the post).

**The one prompt:**

> Build a tiny browser snake game in one HTML file: arrow keys or WASD to steer, on-screen arrow buttons for touch, eat the glowing dots to grow and score, hitting a wall or yourself ends the game, speed rises as you eat, show score and best score saved in localStorage, press R or tap to restart, dark neon style, works on a phone.

The game is `game.html` — a single file, no dependencies. Steer with arrow keys / WASD or the on-screen buttons, eat the glowing dots, don't hit the walls or yourself. Score and best score are shown at the top; the best is saved in localStorage. Open `game.html?demo=1` and the autopilot plays by itself.

`main.ts` is the entry program the grader runs: it copies `POST.json` (the X post's address) to the output directory.

## Run it

```sh
python3 -m http.server 8000
# then open http://localhost:8000/game.html in a browser
# (or just double-click game.html — no build step, no dependencies)
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=g0cnq9c3&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

# Infinite Time Pieces - Magic Research 2

A simple quality-of-life mod for **Magic Research 2** that provides virtually unlimited Time Pieces.

Tired of waiting around to accumulate enough Time Pieces to speed up your game? This mod automatically replenishes your Time Pieces to 100,000, allowing you to use the game's existing speed and time-skip features whenever you want.

## Features

- Automatically replenishes Time Pieces to 100,000.
- Supports the game's built-in speed controls, including 5x speed.
- Allows repeated use of time skips without worrying about running out of Time Pieces.
- Works automatically in the background.
- Does not modify your save file or change other game mechanics.
- No additional software required.

The mod does not force the game to run faster. You retain full control through the normal in-game interface.

## Requirements

- Magic Research 2 (Steam version)
- Game version 1.8.1 or later

## Installation

1. Download the latest release from the [Releases page](https://github.com/Breken/Magic-Research-2-Infinite-Time-Pieces/releases/latest).
2. Extract `infinite-time-pieces.js` from the downloaded ZIP.
3. Open Steam and navigate to your Library.
4. Right-click **Magic Research 2** and select **Manage → Browse local files**.
5. Find the `mods` folder in the game's installation directory. If it doesn't exist, create it.
6. Copy `infinite-time-pieces.js` into the `mods` folder.
7. Restart Magic Research 2.

The mod should now automatically replenish your Time Pieces during gameplay.

**Note:** If upgrading from an earlier version, remove the previous mod file to avoid loading two copies.

## How It Works

The mod registers a listener with Magic Research 2's game-time system.

When the Time Pieces balance falls below 100,000, it automatically replenishes the missing amount using the game's normal resource-management functions.

Your existing speed and time-skip controls remain unchanged.

## Uninstallation

Simply delete `infinite-time-pieces.js` from your game's `mods` folder and restart the game.

## Disclaimer

This is an unofficial community mod for Magic Research 2.

It is not affiliated with or endorsed by the game's developer.

Use at your own discretion.

# Nebulator

A collection of light & dark themes for Visual Studio Code with a well balanced purple-centered palette.

## Palette

| Role | Color |
| --- | --- |
| Background (chrome) | `#030712` |
| Background (editor/cards) | `#111827` |
| Border | `#1f2937` / `#374151` |
| Text | `#f3f4f6` `#d1d5db` `#9ca3af` `#6b7280` |
| Accent (deep) | `#a855f7` purple-500 |
| Accent (bright) | `#c084fc` purple-400 |
| Types | `#d8b4fe` purple-300 |
| Functions | `#60a5fa` blue-400 |
| Strings | `#4ade80` green-400 |
| Interpolated strings | `#00c758` green-500 |
| Constants | `#facc15` yellow-400 |
| Numbers | `#edb200` yellow-500 |
| Tags | `#f87171` red-400 |
| Invalid | `#fb2c36` red-500 |

## Themes

| Theme | Type |
| --- | --- |
| Nebulator | Dark |
| Nebulator Light | Light |

## Build

Regenerates `themes/*.json` from the sources in `src/`:

- `src/colors.mjs` — syntax color palettes
- `src/syntax.mjs` — token scope definitions
- `src/workbench/nebula.mjs` — workbench (UI) colors for Nebulator
- `src/workbench/nebula-light.mjs` — workbench (UI) colors for Nebulator Light

```bash
npm run build
```

## Package

```bash
npx @vscode/vsce package
```

This produces `nebulator-<version>.vsix`.

## Install

**VS Code:**

```bash
code --install-extension nebulator-<version>.vsix
```

**VS Code Insiders:**

```bash
code-insiders --install-extension nebulator-<version>.vsix
```

Alternatively, in either editor: Extensions view (`Ctrl+Shift+X`) → `⋯` → **Install from VSIX...**.

Then select the theme with `Ctrl+K Ctrl+T` → **Nebulator** or **Nebulator Light**.

## Test locally

Open this folder in VS Code and press `F5`, then pick **Nebulator** or **Nebulator Light** from the color theme picker (`Ctrl+K Ctrl+T`).

## Credits

- Token scope definitions are adapted from [Noctis](https://github.com/liviuschera/noctis) by Liviu Schera (MIT).

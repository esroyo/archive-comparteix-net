# Comparteix.net Archive

Static archive of Comparteix.net, a Catalan eDonkey2000/eMule link directory
that operated from 2004 to 2013.

## About

This repository contains a static snapshot of the original PHP-based website,
converted to pure HTML for archival purposes. The site was shut down in November
2013 due to outdated and insecure technology.

## Structure

- `/` - Static HTML files (web root, ready for GitHub Pages)
- `archive-notice.js` - Modern notification system using native `<dialog>` API
- `archive-notice.css` - Styles for the archive notice banner and modal
- `README.md` - This file

## Hosting

Configured for GitHub Pages serving from `/` (root) at `antic.comparteix.net`.

## Technical Notes

- Converted from PHP to static HTML using wget
- All `/mirror/` paths converted to relative links
- Legacy jQuery dependency removed, replaced with native `<dialog>` API
- Google Analytics tracking removed
- Uses localStorage for "first visit" popup tracking

## Original Message

> Després de nou anys en línia, vull anunciar-vos el tancament d'aquest lloc
> web. La decisió no ha estat gens fàcil.
>
> -- simkin, webmaster de comparteix\
> Castelló de la Plana, 18 de novembre de 2013

## Archive Stats

- **Categories**: 613
- **eLinks**: 13,760
- **HTML files**: ~23,000
- **Years online**: 2004-2013

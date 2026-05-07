# Comparteix.net Archive

Static archive of Comparteix.net, a Valencian eDonkey2000/eMule link directory
that operated from 2004 to 2013.

## About

This repository contains a static snapshot of the original PHP-based website,
converted to pure HTML for archival purposes. The site was shut down in November
2013 due to outdated and insecure technology.

## Archive Stats

- **Categories**: 613
- **eLinks**: 13,760
- **HTML files**: ~23,000
- **Years online**: 2004-2013

### Docker (local)

```sh
# build a docker image of this service
docker build -t comparteix -f Dockerfile .

# run the service on localhost:8000
docker run -p 8000:80 comparteix
```

// This downloads the moby openAPI specification (for WSL-helper).  It is
// used by `go generate` in .../src/go/wsl-helper/pkg/dockerproxy.

import fs from 'fs';
import path from 'path';
import { download } from '../lib/download.mjs';

// The version of the moby API we support
const mobyVersion = 'v1.41';

export default async function run() {
  const url = `https://raw.githubusercontent.com/moby/moby/master/docs/api/${ mobyVersion }.yaml`;
  const outPath = path.join(process.cwd(), 'src', 'go', 'wsl-helper', 'pkg', 'dockerproxy', 'swagger.yaml');

  await download(url, outPath, { access: fs.constants.W_OK });
}

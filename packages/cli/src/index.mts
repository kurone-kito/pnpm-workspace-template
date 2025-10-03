#!/usr/bin/env node --enable-source-maps

import HelloWorld from '@kurone-kito/pwt-lib';
import { detectImportWithError } from '@kurone-kito/web-toybox-node';

detectImportWithError(import.meta.url);
console.log(HelloWorld);

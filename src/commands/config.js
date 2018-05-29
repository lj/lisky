/*
 * LiskHQ/lisk-commander
 * Copyright © 2016–2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import { getConfig } from '../utils/config';
import { createCommand } from '../utils/helpers';

const description = `Prints the current configuration.

	Example: config
`;

export const actionCreator = () => async () => getConfig();

const config = createCommand({
	command: 'config',
	alias: 'env',
	description,
	actionCreator,
	errorPrefix: 'Could not get config',
});

export default config;

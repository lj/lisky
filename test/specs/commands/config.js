/*
 * LiskHQ/lisk-commander
 * Copyright © 2017–2018 Lisk Foundation
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
import { setUpCommandConfig } from '../../steps/setup';
import * as given from '../../steps/1_given';
import * as when from '../../steps/2_when';
import * as then from '../../steps/3_then';

describe('config command', () => {
	beforeEach(setUpCommandConfig);
	Given('a config', given.aConfig, () => {
		Given('an action "config"', given.anAction, () => {
			When('the action is called', when.theActionIsCalled, () => {
				Then(
					'it should resolve to the config',
					then.itShouldResolveToTheConfig,
				);
			});
		});
	});
});

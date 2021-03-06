'use strict';

import { expect } from 'chai';

import { any } from '../../src/intents';
import ActionMock from '../actions/action.mock'

describe('IntentAny', () => {

  let state = {};
  beforeEach( () => {
    state.action = undefined;
  });

  it('Up & Running', async () => {
    expect(any).to.be.ok;
  });

  it('Detected with any condition', async () => {
    await any(state, [ActionMock]);

    expect(state.action).to.be.ok;
  });

});

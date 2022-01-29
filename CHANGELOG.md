### Bug fixes
* Fix process is undefined error on browsers ([#7](https://github.com/Reiryoku-Technologies/cTrader-Layer/pull/7)).

2.1.0 - 27-01-2022
===================
### Features
* Add browser support ([#6](https://github.com/Reiryoku-Technologies/cTrader-Layer/pull/6)).

2.0.0 - 30-12-2021
===================
* Accept only payload name when sending commands or listening events. Automatically resolve commands that have no response payload defined.

1.6.0 - 20-12-2021
===================
* Allow using custom client message id when sending a command.

1.5.0 - 15-12-2021
===================
* Update Open API protobuf definitions.
* Include clientMsgId in command responses.

1.4.1 - 20-11-2021
===================
* Encode response payload to true object.

1.4.0 - 20-11-2021
===================
* Convert all long values to number.
* Fix wrong parsing of token accounts and profile.

1.3.0 - 06-07-2021
===================
* Create internal decoding of payload type.

1.2.2 - 01-07-2021
===================
* Handle "errorCode" defined with null value.

1.2.1 - 30-06-2021
===================
* Include protobuf files in published package.

1.2.0 - 19-06-2021
===================
* Create "getAccessTokenProfile" utility method.
* Create "getAccessTokenAccounts" utility method.

1.1.0 - 16-06-2021
===================
* Use TypeScript and refactor codebase.
* Refactor codebase and use private fields.
* Improve documentation.

1.0.0 - 05-06-2021
===================

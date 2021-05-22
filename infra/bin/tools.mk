.PHONY: create_entity
create_entity:
	node ./infra/tools/create_entity

.PHONY: build clear test
build clear test:
	node ./infra/tools/execute_yarn_command --command=$@ $(_ARGS)

.PHONY: bootstrap
bootstrap:
	node ./infra/tools/execute_yarn_command --command=install $(_ARGS)
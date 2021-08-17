include make/general/Makefile

.PHONY: install
install: node_modules ## Installation application

.PHONY: linter
linter: node_modules ## Scripts Linter
ifeq ($(COMMAND_ARGS),all)
	@make linter readme -i
else ifeq ($(COMMAND_ARGS),readme)
	@npm run linter-markdown README.md
else
	@echo "ARGUMENT missing"
	@echo "---"
	@echo "make linter ARGUMENT"
	@echo "---"
	@echo "readme: linter README.md"
endif



# Запуск локальной базы данных
.PHONY: gen
gen:
	npx openapi-typescript-codegen --input ./openapi.yaml --output ./src/shared/api/generated


.PHONY: sync-openapi
sync-openapi:
	wget https://raw.githubusercontent.com/sarc-tech/backend/refs/heads/main/_gen/openapi.yml -O openapi.yml
	npm run generate-openapi

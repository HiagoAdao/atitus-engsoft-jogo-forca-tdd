-include .env
export

URL ?= http://localhost:3000

.PHONY: dev status guess restart test

dev:
	npm run start:web

status:
	@curl -s $(RENDER_API_URL)/  | jq

guess:
	@read -p "Letra: " LETTER; \
	curl -s -X POST $(RENDER_API_URL)/chutar \
		-H "Content-Type: application/json" \
		-d "{\"letra\":\"$$LETTER\"}" | jq

restart:
	@curl -s -X POST $(RENDER_API_URL)/reiniciar | jq

test:
	npm run test:ci

.PHONY: up down restart build logs

# Deployment (Zero-Downtime)
deploy:
	docker compose up -d --build --remove-orphans
	@echo "======================================================"
	@echo "Atualização finalizada com sucesso!"
	@echo "A aplicação foi reconstruída e reiniciada suavemente."
	@echo "======================================================"

# Para a aplicação e remove os containers (Atenção: gera downtime)
down:
	docker compose down
	@echo "A aplicação foi parada e os containers removidos."

# Reinicia os containers
restart:
	docker compose restart

# Apenas builda as imagens
build:
	docker compose build

# Mostra os logs em tempo real
logs:
	docker compose logs -f

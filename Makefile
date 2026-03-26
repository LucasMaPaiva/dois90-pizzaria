.PHONY: up down restart build logs

# Inicia a aplicação em modo background (buildando se necessário)
up:
	docker compose up -d --build
	@echo "======================================================"
	@echo "build finalizado"
	@echo "======================================================"

# Para a aplicação e remove os containers
down:
	docker compose down
	@echo "A aplicação foi parada e os containers removidos com sucesso."

# Reinicia os containers
restart:
	docker compose restart

# Apenas builda as imagens
build:
	docker compose build

# Mostra os logs em tempo real
logs:
	docker compose logs -f

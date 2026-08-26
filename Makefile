.PHONY: up down restart build logs backup backup-list restore

# Deployment (Zero-Downtime)
deploy:
	@echo "Snapshot de seguranca antes de subir..."
	@docker compose exec -T api node backup.js || echo "(api ainda nao esta de pe - seguindo sem snapshot)"
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

# --- Backup do conteudo (banco + midia enviada pelo painel) ---

# Gera um snapshot em ./backups. Se BACKUP_REMOTE estiver definido no .env,
# manda uma copia para la com rclone (ex: BACKUP_REMOTE=gdrive:dois90-backups).
backup:
	docker compose exec -T api node backup.js
	@if [ -n "$$(grep -s '^BACKUP_REMOTE=' .env | cut -d= -f2-)" ]; then \
		remote=$$(grep '^BACKUP_REMOTE=' .env | cut -d= -f2-); \
		echo "Enviando para $$remote ..."; \
		rclone copy ./backups "$$remote" --include 'dois90-*.tar.gz' --progress; \
		echo "Copia externa concluida."; \
	else \
		echo "BACKUP_REMOTE nao definido no .env - backup ficou somente local."; \
	fi

# Lista os snapshots disponiveis, do mais novo para o mais antigo
backup-list:
	@ls -lht ./backups/dois90-*.tar.gz 2>/dev/null || echo "Nenhum backup ainda. Rode: make backup"

# Restaura um snapshot. Uso: make restore FILE=dois90-2026-08-26-1453.tar.gz
restore:
	@test -n "$(FILE)" || (echo "Informe o arquivo: make restore FILE=dois90-....tar.gz"; exit 1)
	docker compose exec -T api node restore.js "$(FILE)"
	docker compose restart api
	@echo "Restore concluido e api reiniciada."

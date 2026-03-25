.PHONY: build up down

IMAGE_NAME = dois90-react
CONTAINER_NAME = dois90-react-app
PORT = 8080

# Build the Docker image using the Dockerfile inside the .docker directory
build:
	docker build -t $(IMAGE_NAME) -f .docker/Dockerfile .

# Build the image and run the container
up: build
	docker run -d --name $(CONTAINER_NAME) -p $(PORT):80 $(IMAGE_NAME)
	@echo "======================================================"
	@echo "A aplicação React está rodando em http://localhost:$(PORT)"
	@echo "======================================================"

# Stop and remove the running container
down:
	@docker stop $(CONTAINER_NAME) 2>/dev/null || true
	@docker rm $(CONTAINER_NAME) 2>/dev/null || true
	@echo "O container $(CONTAINER_NAME) foi parado e removido com sucesso."

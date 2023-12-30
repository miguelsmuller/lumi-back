.SILENT:

.DEFAULT_GOAL = help

COLOR_RESET = \033[0m
COLOR_GREEN = \033[32m
COLOR_YELLOW = \033[33m

PROJECT_NAME = `basename $(PWD)`

SHELL := /bin/bash

DOCKER_IMAGE_NAME = miguelsmuller/lumi-back-invoices
DOCKER_CONTAINER_NAME = lumi-back-invoices

GIT_HASH = $(shell git rev-parse --short HEAD)

## prints this help
help:
	printf "${COLOR_YELLOW}\n${PROJECT_NAME}\n\n${COLOR_RESET}"
	awk '/^[a-zA-Z\-\_0-9\.%]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "${COLOR_GREEN}$$ make %s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	printf "\n"


## Build a Docker image for the application
build-image:
	docker build . \
    -t $(DOCKER_IMAGE_NAME):$(GIT_HASH) \
    --build-arg REACT_APP_API_URL=http://localhost:1234


## Start the application in a Docker container
run-image:
	docker run --name $(DOCKER_CONTAINER_NAME) \
		-p 2002:3000 \
        -e DB_CONNECTION="postgres" \
        -e DB_HOST="srv-postgres" \
        -e DB_PORT="5432" \
        -e DB_USERNAME="postgres" \
        -e DB_PASSWORD="root" \
        -e DB_DATABASE="lumi" \
		-d -it $(DOCKER_IMAGE_NAME):$(GIT_HASH)


## Stop the running Docker container
stop-image:
	docker container stop $(DOCKER_CONTAINER_NAME)


## Remove the running Docker container
remove-image:
	docker container stop $(DOCKER_CONTAINER_NAME) && \
	docker rm -f $(DOCKER_CONTAINER_NAME)


## Creates a tag for the Docker image for versioning purposes
tag-image:
	docker tag $(DOCKER_IMAGE_NAME) $(DOCKER_IMAGE_NAME):$(GIT_HASH)


## Publishes the Docker image to a registry (https://hub.docker.com/)
publish-image:
	docker push $(DOCKER_IMAGE_NAME):$(GIT_HASH)

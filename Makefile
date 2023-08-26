run-dev:
	docker-compose up -d
run-prod:
	docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

include .env

create-backup:
ifeq ($(strip $(DATABASE_EXCLUDE_TABLES_DATA)),)
	@echo "Creating backup of all tables data"
	@docker exec -t ${CONTAINER_NAME} pg_dump -c --user ${DATABASE_USER} --dbname=${DATABASE_NAME} > src/file/dump.sql
else
	@docker exec -t ${CONTAINER_NAME} pg_dump -c --user ${DATABASE_USER} --dbname=${DATABASE_NAME} --exclude-table-data=${DATABASE_EXCLUDE_TABLES_DATA} > src/file/dump.sql
endif
	@echo "Backup created, now upload it to Supabase"
	@docker run --rm -v "${PWD}:/app" -w /app node:16.14.2 /bin/bash -c "yarn install; node src/index.js"
	@echo "Backup uploaded to Supabase, all jobs done."
	
include .env

create-backup:
	@docker exec -t ${CONTAINER_NAME} pg_dumpall -c --user ${DATABASE_USER}  -l ${DATABASE_NAME} > src/file/dump.sql
	@echo "Backup created, now upload it to Supabase"
	@docker run --rm -v "${PWD}:/app" -w /app node:16.14.2 node src/index.js
	@echo "Backup uploaded to Supabase, all jobs done."
	
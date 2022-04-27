# Ta-vivo Database backup uploader

This is a simple service to upload the backup of postgresql database to a Supabase Bucket.

---

## Manual run

Install all depndencies:

```bash
yarn
```

run the service:

```bash
node src/index.js
```

---

## Automatic Run with makefile

This command doing all the steps necessary to run the service inside Docker containers:

```bash
make
```

## Restore backup

At this point, the backup service generate a `SQL` file with the backup of the database.

```bash
cat dump.sql | docker exec -i CONTAINER_NAME_OR_ID psql -U postgres -d tavivo
```

This is all! :heart:
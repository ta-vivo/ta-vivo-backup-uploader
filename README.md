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

This is all! :heart:
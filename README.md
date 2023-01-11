# Ta-vivo Database backup uploader

This is a simple service to upload the backup of postgresql database to a Supabase Bucket.

Make a sure you set the `env` vars before continue


---

## Automatic Run with makefile

This command doing all the steps necessary to run the service inside Docker containers:

```bash
make
```

## Automatic run with makefile remote server

This command doing all the steps necessary to run the service inside Docker containers in a remote server:

```bash
make -f Makefile-remote
```

## Restore backup

At this point, the backup service generate a `SQL` file with the backup of the database.

```bash
cat dump.sql | docker exec -i CONTAINER_NAME_OR_ID psql -U postgres -d tavivo
```

This is all! :heart:

## Tips

Here I am going to assume that you have crontab installed.

1 - Add your job `crontab -e`;

Run this with a crontab to make a backup every day at 3am

```bash
0 3 * * * cd /var/www/services/ta-vivo-backup-uploader && make >/dev/null 2>&1
```

or for remote server

```bash
0 3 * * * cd /var/www/services/ta-vivo-backup-uploader && make -f Makefile-remote >/dev/null 2>&1
```

2 - Check if your job is running `crontab -l`;

### View crontab logs

You can add `/tmp/stderr.log` on the end of the line instead of `&1` like;

```bash
0 3 * * * cd /var/www/services/ta-vivo-backup-uploader && make -f Makefile-remote >/dev/null 2>/tmp/stderr.log
```

# master-project

# 1. You have either to install craft from new or install the backup database. If it doesnt work try to install the composer first:

ddev import-db --file=./storage/backups/the-name-of-your-database-file.sql.zip

# 2. Install Composer

ddev composer install

# 3. Make sure to have the .env file in the files.

# 4. Make sure to have a CRAFT_SECURITY_KEY. If not, run:

ddev craft setup/security-key

# 3. Start the application:

ddev start

# INITIAL CREDENTIALS for craft:

email: andrea.windisch@gmx.net
username: admin
password: master

To change the credentials:
ddev craft users/set-password andrea.windisch@gmx.net your-password


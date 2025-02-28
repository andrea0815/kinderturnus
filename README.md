# master-project

# 1. Change the name in .ddev/config.yaml
name: master 
to
name: new-project-name

# 2. Make sure to have the .env file in the files.
if not, create new and copy from .env.example.dev

# 3. change name of the hosting website in .env file
PRIMARY_SITE_URL="http://master.ddev.site"
to
PRIMARY_SITE_URL="http://new-project-name.ddev.site"

# 4. You have either to install craft from new or install the backup database. If it doesnt work try to install the composer first:

ddev import-db --file=./storage/backups/the-name-of-your-database-file.sql.zip

# 5. Install Composer

ddev composer install

# 6. Make sure to have a CRAFT_SECURITY_KEY. If not, run:

ddev craft setup/security-key

# 7. Start the application:

ddev start

# INITIAL CREDENTIALS for craft:

email: andrea.windisch@gmx.net
username: admin
password: master

To change the credentials:
ddev craft users/set-password andrea.windisch@gmx.net your-password


CREATE USER 'read_user'@'localhost' IDENTIFIED BY 'read_user';

GRANT SELECT ON internetappli.* TO 'read_user'@'localhost';

FLUSH PRIVILEGES;
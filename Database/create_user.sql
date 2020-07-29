CREATE USER 'internetappli'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT ON internetappli.* TO 'user'@'localhost';

FLUSH PRIVILEGES;
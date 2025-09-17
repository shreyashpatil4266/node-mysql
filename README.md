docker run -d \
  --name mysql_db \
  --network appnet \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  -e MYSQL_DATABASE=testdb \
  -p 3306:3306 \
  mysql:8.0


docker build -t node-mysql-app .

docker images

docker run -d \
  --name node_app \
  --network net \
  -p 3000:3000 \
  node-mysql-app

docker ps

docker exec -it mysql_db mysql -u root -p


when you will cahnge anything in mysql it will be reflected in web


<img width="1915" height="1078" alt="Screenshot 2025-09-17 232314" src="https://github.com/user-attachments/assets/2eaa9cbc-2a51-41e2-b7bb-27f286864ad4" />



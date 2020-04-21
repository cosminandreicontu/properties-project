Prerequisites:
1. Node 
2. Docker

Steps:
1. git clone https://github.com/cosminandreicontu/properties-project.git
2. cd properties-project/
3. docker build -t webapp-ui:latest ui/
4. docker build -t webapp-server:latest server/
5. docker-compose up

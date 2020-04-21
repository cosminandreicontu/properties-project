#Prerequisites:
    - Node
    - Docker

#Steps:
1. git clone https://github.com/cosminandreicontu/properties-project.git
2. docker build -t webapp-ui:latest ui/
3. docker build -t webapp-server:latest server/
4. docker-compose up

FROM mongo:latest
COPY propsdb.json /propsdb.json
CMD mongoimport --host mongodb --db props --collection properties --drop --file /propsdb.json --jsonArray
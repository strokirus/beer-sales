setup:
	@echo "Installing root dependencies"
	(npm install)
	@echo "Installing dependencies front-end"
	(npm install --prefix ./fe/)
	@echo "Installing dependencies Server"
	(npm install --prefix ./server/)

run:
	@echo "Creating build"
	(npm run build --prefix ./fe/)
	@echo "Starting Server"
	(./node_modules/.bin/pm2 start ./server)
	@echo "Starting Front End"
	(./node_modules/.bin/http-server ./fe/public)

stop:
	@echo "Killing proccess"
	(./node_modules/.bin/pm2 stop ./server)

setup:
	@echo "Installing root dependencies"
	(yarn install)
	@echo "Installing dependencies front-end"
	(yarn install --prefix ./fe/)
	@echo "Installing dependencies Server"
	(yarn install --prefix ./server/)

run:
	@echo "Creating build"
	(yarn --cwd ./fe/ build)
	@echo "Starting Server"
	(./node_modules/.bin/pm2 start ./server)
	@echo "Starting Front End"
	(./node_modules/.bin/http-server ./fe/public)

stop:
	@echo "Killing proccess"
	(./node_modules/.bin/pm2 stop ./server)

ENV := development
PROJECT_ID := null # add here YOUR-PROJECT-ID
CONF_PATH := configs/$(ENV)
TAG := null

deploy/dev:
	yarn;
	yarn build/dev;
	firebase -P $(PROJECT_ID) deploy --only hosting;